class UpdateServiceDescriptions < ActiveRecord::Migration[5.1]
  def change
    rename_column :services, :description, :short_description
    add_column :services, :long_description, :text, default: "", null: false
  end
end
