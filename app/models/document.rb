class Document < ApplicationRecord
  mount_uploader :link, CsvUploader
  belongs_to :project
  has_many :charts, dependent: :destroy


  def sum_hash
    container_number = 0
    sum = Hash.new(0)
    to_data.each_with_object(sum) do |hash, sum|
      container_number = hash.each { |key, value| sum[key] += value.to_i }.map { |k,v| v}
    end
    container_number.drop(1)
  end

  def get_headers
    @arrayofhash.first.keys
  end

    def to_data
    array = []
    csv_file = open(link.url).read
    csv_options = { col_sep: ',', quote_char: '"', headers: :first_row }
    CSV.parse(csv_file, csv_options) do |row|
      array << row.to_hash
      end
      array
    end

end
