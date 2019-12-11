class Document < ApplicationRecord
  mount_uploader :link, CsvUploader
    has_many :charts, dependent: :destroy

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
