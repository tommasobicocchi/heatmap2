class AddDescriptionToCharts < ActiveRecord::Migration[6.0]
  def change
    add_column :charts, :description, :text
  end
end
