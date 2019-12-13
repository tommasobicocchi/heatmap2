require 'csv'

class DocumentsController < ApplicationController


  def index

      if params[:query].present?
      @documents = Document.where('documents.link ILIKE ? AND CAST(documents.project_id AS text) ILIKE ?', "%#{params[:query]}%", "%#{params[:project_id]}%")
      #redirect_to project_documents_path(@documents)
      @document = Document.new
      @document = Document.where(project_id: params[:project_id])
      if params[:document_id].present?
        create_requirements
      end
    else
      @documents = Document.where(project_id: params[:project_id])
      @documents = Document.all
      @document = Document.new
      @document = Document.where(project_id: params[:project_id])
      if params[:document_id].present?
        create_requirements
      end
    end
  end

  def create_requirements
    element_params = Document.find(params[:document_id])
    @arrayofhash = element_params.to_csv
    @headers = @arrayofhash.first.keys
    element_params.csv_data
  end

  def create
    @document = Document.new(document_params)
    @document.project_id = params[:project_id]
    if @document.save
      redirect_to project_documents_path(document_id: @document.id)
    else
      render 'index'
    end
  end


  private

  def sum_columns_hash(arrayofhash)
    container_number = 0
    sum = Hash.new(0)
    arrayofhash.each_with_object(sum) do |hash, sum|
      container_number = hash.each { |key, value| sum[key] += value.to_i }.map { |k,v| v}
    end
    container_number.drop(1)
  end

  def set_attribute_to_csv(link)
    array = []
    csv_file = open(link).read
    csv_options = { col_sep: ',', quote_char: '"', headers: :first_row }
    CSV.parse(csv_file, csv_options) do |row|
      array << row.to_hash
    end
    array
  end

  def document_params
    params.require(:document).permit(:link, :project_id)
  end

end
