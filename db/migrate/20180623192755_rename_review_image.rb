class RenameReviewImage < ActiveRecord::Migration[5.1]
  def change
    rename_column :reviews, :other_image_url, :logo_url
  end
end
