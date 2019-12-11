require 'csv'

class DocumentsController < ApplicationController


  def index
    @documents = Document.all
    @document = Document.new
    if params[:document_id].present?
      last_element = Document.find(params[:document_id])
      #last_element.assign_attributes(arrayofhash: set_attribute_to_csv(@documents.last.link.url))
      #last_element.arrayofhash_will_change!
      @arrayofhash = last_element.to_csv
      @headers = @arrayofhash.first.keys
      sum_columns_hash(@arrayofhash)
    end
  end

  def document_params
    params.require(:document).permit(:link)
  end

  def new
    @document = Document.new
  end

  def create
    #csv_hash = {}
    @document = Document.new(document_params)
    @document.save
    redirect_to documents_path(document_id: @document.id)
    #set_attribute_to_csv(@document[:link], csv_hash)
    #@document.link = csv_hash
  end

  def sum_columns_hash(array)
    container_number = 0
    sum = Hash.new(0)
    array.each_with_object(sum) do |hash, sum|
      a = hash.each { |key, value| sum[key] += value.to_i }.map { |k,v| v}
    end
    #container_number.delete_at(0)
    #container_number
    #raise
  end

  private

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
    params.require(:document).permit(:link)
  end

end
