class CreateReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :reviews do |t|
      t.string :reviewer_name
      t.string :reviewer_description
      t.string :reviewer_location
      t.string :title, null: false, default: ''
      t.text :body, null: false, default: ''
      t.string :other_image_url
      t.timestamps
    end
  end
end
