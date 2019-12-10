class ChangeFilepathToLinkinDocuments < ActiveRecord::Migration[6.0]
  def change
    rename_column :documents, :filepath, :link
  end
end
