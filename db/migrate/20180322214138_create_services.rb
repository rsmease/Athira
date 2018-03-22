class CreateServices < ActiveRecord::Migration[5.1]
  def change
    create_table :services do |t|
      t.string :name, null: false, default: ''
      t.text :description, null: false, default: ''
      t.string :icon_url
      t.string :other_image_url
      t.timestamps
    end
  end
end
