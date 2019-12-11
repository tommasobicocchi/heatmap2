class CreateCharts < ActiveRecord::Migration[6.0]
  def change
    create_table :charts do |t|
      t.jsonb :data
      t.references :document, null: false, foreign_key: true

      t.timestamps
    end
  end
end
