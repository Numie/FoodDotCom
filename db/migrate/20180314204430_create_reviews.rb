class CreateReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :reviews do |t|
      t.integer :user_id, null: false
      t.integer :restaurant_id, null: false
      t.integer :rating, null: false, default: 5
      t.text :review, null: false
    end
    add_index :reviews, :user_id
    add_index :reviews, :restaurant_id
  end
end
