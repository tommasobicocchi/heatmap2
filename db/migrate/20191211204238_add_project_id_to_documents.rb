class AddProjectIdToDocuments < ActiveRecord::Migration[6.0]
  def change
    add_reference :documents, :project, null: false, foreign_key: true
  end
end
