require 'csv'
require 'carrierwave/orm/activerecord'


class DocumentsController < ApplicationController


  def index
    @project = Project.find(params[:project_id])
      if params[:query].present?
      @documents = Document.where('name ILIKE ? AND CAST(project_id AS text) ILIKE ?', "%#{params[:query]}%" ,"%#{params[:project_id]}%")
      #raise
      #@documents = Document.where('first_name ILIKE ? AND CAST(project_id AS text) ILIKE ?', "%#{params[:query]}%", "%#{params[:project_id]}%")
      #redirect_to project_documents_path(@documents)
      @document = Document.new
      @document = Document.where(project_id: params[:project_id])
      if params[:document_id].present?
        create_requirements
      end
    else
      @documents = Document.where(project_id: params[:project_id])
      # @documents = Document.all
      @document_new = Document.new
      @document = Document.find_by(project_id: params[:project_id])
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
    #@document.map { |document| document.rows = document.to_csv.size }
    #@document.map { |document| document.columns = document.to_csv.first.keys.size}
    #element_params.columns = element_params.to_csv.first.keys.size
  end

  def create
    if params[:file].present?
      @document = Document.new
      @document.link = params[:file]
      @document.first_name = params[:file].original_filename
      @document.project_id = params[:project_id]

      @document.save
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
    params.require(:document).permit(:link, :project_id, :feature_csv, :name)
  end

end
