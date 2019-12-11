require 'csv'

class DocumentsController < ApplicationController


  def index
    @documents = Document.all
    @document = Document.new
    if params["format"].present?
      last_element = @documents.last
      #last_element.assign_attributes(arrayofhash: set_attribute_to_csv(@documents.last.link.url))
      #last_element.arrayofhash_will_change!
      @arrayofhash = set_attribute_to_csv(@documents.last.link.url)
      @headers = @arrayofhash.first.keys
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
    redirect_to documents_path(@document)
    #set_attribute_to_csv(@document[:link], csv_hash)
    #@document.link = csv_hash
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
