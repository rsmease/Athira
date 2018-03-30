class CreateLeaders < ActiveRecord::Migration[5.1]
  def change
    create_table :leaders do |t|
      t.string :name, null: false, default: ''
      t.string :title, null: false, default: ''
      t.text :description, null: false, default: ''
      t.string :headshot_url, null: false, default: ''
      t.timestamps
    end
  end
end
