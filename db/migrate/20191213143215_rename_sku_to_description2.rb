class RenameSkuToDescription2 < ActiveRecord::Migration[6.0]
  def change
    rename_column :projects, :sku, :description
  end
end
