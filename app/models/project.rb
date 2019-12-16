class Project < ApplicationRecord
  belongs_to :user
<<<<<<< HEAD
  has_many :documents
  has_many :charts, through: :documents
=======
  has_many :documents, dependent: :destroy
>>>>>>> master
end
