class CreateTerms < ActiveRecord::Migration[5.1]
  def change
    create_table :terms do |t|
      t.string :title, null: false, default: ''
      t.text :text, null: false, default: ''
      t.timestamps
    end
  end
end
