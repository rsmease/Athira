class AddSocialMediaLinksToCompany < ActiveRecord::Migration[5.1]
  def change
    add_column :companies, :facebook_url, :string, :null => false, :default => 'https://www.facebook.com'
    add_column :companies, :linkedin_url, :string, :null => false, :default => 'https://www.linkedin.com'
  end
end
