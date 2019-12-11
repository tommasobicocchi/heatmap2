class Document < ApplicationRecord
  mount_uploader :link, CsvUploader
  has_many :charts, dependent: :destroy
end
