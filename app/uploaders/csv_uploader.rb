class CsvUploader < CarrierWave::Uploader::Base
  include Cloudinary::CarrierWave
end
