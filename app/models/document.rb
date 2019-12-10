class Document < ApplicationRecord
  mount_uploader :filepath, CsvUploader
end
