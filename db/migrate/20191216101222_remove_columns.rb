class RemoveColumns < ActiveRecord::Migration[6.0]
  def change
    remove_column :documents, :rows
    remove_column :documents, :columns
  end
end
