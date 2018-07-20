class AddHeadlinesToImageCarousels < ActiveRecord::Migration[5.1]
  def change
    add_column :image_carousels, :headlines, :string, array: true, null: false, default: []
  end
end
