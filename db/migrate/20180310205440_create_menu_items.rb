class CreateMenuItems < ActiveRecord::Migration[5.1]
  def change
    create_table :menu_items do |t|
      t.integer :restaurant_id, null: false
      t.string :name, null: false
      t.text :description
      t.float :price, null: false

      t.timestamps
    end
    add_index :menu_items, :restaurant_id
  end
end
