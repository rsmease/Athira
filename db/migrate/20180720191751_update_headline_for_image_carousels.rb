class UpdateHeadlineForImageCarousels < ActiveRecord::Migration[5.1]
  def change
    rename_column :image_carousels, :headline, :headlines
  end
end
