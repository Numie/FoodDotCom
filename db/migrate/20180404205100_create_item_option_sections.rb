class CreateItemOptionSections < ActiveRecord::Migration[5.1]
  def change
    create_table :item_option_sections do |t|
      t.integer :item_id, null: false
      t.string :name, null: false
      t.text :description
      t.boolean :required?, null: false, default: false
      t.integer :min_allowed, null: false
      t.integer :max_allowed, null: false

      t.timestamps
    end
    add_index :item_option_sections, :item_id
  end
end
