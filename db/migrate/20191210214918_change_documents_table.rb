class ChangeDocumentsTable < ActiveRecord::Migration[6.0]
  def change
    add_column :documents, :arrayofhash, array:true, default: []
    serialize :arrayofhash, Array
  end
end
