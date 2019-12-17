class Document < ApplicationRecord
  mount_uploader :link, CsvUploader
  belongs_to :project
  has_many :charts, dependent: :destroy
  validates :name, presence: true
  validates :link, presence: true
  validates :name, length: { minimum: 2 }

  def csv_headers
    to_csv.first.keys
  end

  def csv_data
    to_csv.inject { |hash, row| hash.merge(row) {
      |_key, total, value| total.to_i + value.to_i } }.values
    end

    def to_csv(column_ids = nil)
      array = []
      csv_file = open(link.url).read
      csv_options = { col_sep: ',', quote_char: '"', headers: :first_row }
      CSV.parse(csv_file, csv_options) do |row|
      array << row.to_hash # row[0]
    end
    array
  end

def csv_selection_headers(text)
  array_index_2 = []
  array_index = text.split(',')
  array_index.delete('0')
  array_index.map { |index| array_index_2 << csv_headers[index.to_i] }
  array_index_2
end

def csv_selection_data(text)
  array_index_2 = []
  array_index = text.split(',')
  array_index.delete('0')
  array_index.map { |index| array_index_2 << csv_data[index.to_i] }
  array_index_2
end

end
