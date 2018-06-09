class CreateVisitors < ActiveRecord::Migration[5.1]
  def change
    create_table :visitors do |t|
      t.string :first_name, null: false, default: ''
      t.string :last_name, null: false, default: ''
      t.string :email_address, null: false, default: ''
      t.string :phone_number, null: false, default: ''
      t.text :message, null: false, default: ''
      t.timestamps
    end
  end
end
