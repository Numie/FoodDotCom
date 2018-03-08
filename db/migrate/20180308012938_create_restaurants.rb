class CreateRestaurants < ActiveRecord::Migration[5.1]
  def change
    create_table :restaurants do |t|
      t.string :name, null: false
      t.string :address, null: false
      t.string :phone, null: false
      t.string :img_url, null: false
      t.string :cuisine, null: false
      t.float :delivery_minimum, null: false
      t.float :delivery_fee
      t.time :open_time, null: false
      t.time :close_time, null: false
      t.float :lat, null: false
      t.float :lng, null: false

      t.timestamps
    end
  end
end
