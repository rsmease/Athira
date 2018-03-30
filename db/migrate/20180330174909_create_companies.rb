class CreateCompanies < ActiveRecord::Migration[5.1]
  def change
    create_table :companies do |t|
      t.string :name, null: false, default: ''
      t.string :headline, null: false, default: ''
      t.text :long_description, null: false, default: ''
      t.text :short_description, null: false, default: ''
      t.timestamps
    end
  end
end
