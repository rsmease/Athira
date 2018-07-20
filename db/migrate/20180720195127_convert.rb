class Convert < ActiveRecord::Migration[5.1]
  def change
    remove_column :image_carousels, :headlines
  end
end
