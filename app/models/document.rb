class Document < ApplicationRecord
  mount_uploader :link, CsvUploader
end
