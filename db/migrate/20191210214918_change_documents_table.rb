class ChangeDocumentsTable < ActiveRecord::Migration[6.0]
  def change
    add_column :documents, :arrayofhash, :text, array:true, default: []
  end
end
