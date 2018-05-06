class AddHeadlineToImageCarousel < ActiveRecord::Migration[5.1]
  def change
    add_column :image_carousels, :headline, :string, null: false, default: ''
  end
end
