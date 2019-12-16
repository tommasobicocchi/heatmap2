class AddTitleToCharts < ActiveRecord::Migration[6.0]
  def change
    add_column :charts, :name, :string
  end
end
