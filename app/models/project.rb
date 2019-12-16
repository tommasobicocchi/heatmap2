class Project < ApplicationRecord
  belongs_to :user
  has_many :documents
  has_many :charts, through: :documents
end
