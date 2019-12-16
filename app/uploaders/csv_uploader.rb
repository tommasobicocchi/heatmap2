require 'carrierwave/orm/activerecord'

class CsvUploader < CarrierWave::Uploader::Base
  include Cloudinary::CarrierWave

  def cache! file
    super
    return file
  end



end
