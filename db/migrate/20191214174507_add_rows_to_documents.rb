class AddRowsToDocuments < ActiveRecord::Migration[6.0]
  def change
    add_column :documents, :columns, :string
    add_column :documents, :rows, :string
  end
end
