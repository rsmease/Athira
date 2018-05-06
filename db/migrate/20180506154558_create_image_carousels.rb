class CreateImageCarousels < ActiveRecord::Migration[5.1]
  def change
    create_table :image_carousels do |t|
      t.string :location, null: false
      t.string :urls, array: true, null: false, default: []
      t.timestamps
    end
  end
end
