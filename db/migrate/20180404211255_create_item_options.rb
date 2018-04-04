class CreateItemOptions < ActiveRecord::Migration[5.1]
  def change
    create_table :item_options do |t|
      t.integer :item_option_section_id, null: false
      t.string :name, null: false
      t.string :description
      t.float :price, null: false, default: 0

      t.timestamps
    end
    add_index :item_options, :item_option_section_id
  end
end
