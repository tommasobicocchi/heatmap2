class AddNameToDocuments < ActiveRecord::Migration[6.0]
  def change
    add_column :documents, :first_name, :string
    add_column :documents, :name, :string
  end
end
