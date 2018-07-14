class UpdateCompanyEmailPhone < ActiveRecord::Migration[5.1]
  def change
    add_column :companies, :phone_number, :string, null: false, default: ''
    add_column :companies, :email_address, :string, null: false, default: ''
  end
end
