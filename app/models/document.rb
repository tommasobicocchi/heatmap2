class Document < ApplicationRecord
  mount_uploader :link, CsvUploader
  belongs_to :project
  has_many :charts, dependent: :destroy

  def csv_headers
    to_csv.first.keys.drop(1)
  end

  def csv_data
    to_csv.inject { |hash, row| hash.merge(row) { |_key, total, value| total.to_i + value.to_i } }.values.drop(1)
  end

  def to_csv
    array = []
    csv_file = open(link.url).read
    csv_options = { col_sep: ',', quote_char: '"', headers: :first_row }
    CSV.parse(csv_file, csv_options) do |row|
      array << row.to_hash
    end
    array
  end
end
