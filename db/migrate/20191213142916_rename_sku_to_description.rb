class RenameSkuToDescription < ActiveRecord::Migration[6.0]
  def change
    remove_column :projects, :description
  end
end
