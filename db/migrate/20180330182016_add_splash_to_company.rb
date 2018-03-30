class AddSplashToCompany < ActiveRecord::Migration[5.1]
  def change
    add_column :companies, :splash_image_url, :string, null: false, default: ''
  end
end
