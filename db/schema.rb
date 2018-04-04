# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180404215131) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "item_option_sections", force: :cascade do |t|
    t.integer "item_id", null: false
    t.string "name", null: false
    t.text "description"
    t.boolean "required?", default: false, null: false
    t.integer "min_allowed", null: false
    t.integer "max_allowed", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["item_id"], name: "index_item_option_sections_on_item_id"
  end

  create_table "item_options", force: :cascade do |t|
    t.integer "item_option_section_id", null: false
    t.string "name", null: false
    t.string "description"
    t.float "price", default: 0.0, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["item_option_section_id"], name: "index_item_options_on_item_option_section_id"
  end

  create_table "menu_items", force: :cascade do |t|
    t.integer "restaurant_id", null: false
    t.string "name", null: false
    t.text "description"
    t.float "price", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["restaurant_id"], name: "index_menu_items_on_restaurant_id"
  end

  create_table "order_item_options", force: :cascade do |t|
    t.integer "order_item_id", null: false
    t.integer "item_option_id", null: false
    t.index ["item_option_id"], name: "index_order_item_options_on_item_option_id"
    t.index ["order_item_id"], name: "index_order_item_options_on_order_item_id"
  end

  create_table "order_items", force: :cascade do |t|
    t.integer "order_id", null: false
    t.integer "menu_item_id", null: false
    t.integer "quantity", null: false
    t.string "item_instructions"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["menu_item_id"], name: "index_order_items_on_menu_item_id"
    t.index ["order_id"], name: "index_order_items_on_order_id"
  end

  create_table "orders", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "restaurant_id", null: false
    t.float "subtotal", null: false
    t.float "tax", null: false
    t.float "tip"
    t.float "delivery_fee"
    t.float "total", null: false
    t.string "delivery_instructions"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["restaurant_id"], name: "index_orders_on_restaurant_id"
    t.index ["user_id"], name: "index_orders_on_user_id"
  end

  create_table "restaurants", force: :cascade do |t|
    t.string "name", null: false
    t.string "address", null: false
    t.string "phone", null: false
    t.string "img_url", null: false
    t.string "cuisine", null: false
    t.float "delivery_minimum", null: false
    t.float "delivery_fee"
    t.string "open_time", null: false
    t.string "close_time", null: false
    t.float "latitude", null: false
    t.float "longitude", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "city", default: "New York", null: false
    t.string "state", default: "NY", null: false
    t.string "zip", default: "10003", null: false
  end

  create_table "reviews", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "restaurant_id", null: false
    t.integer "rating", default: 5, null: false
    t.text "review", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["restaurant_id"], name: "index_reviews_on_restaurant_id"
    t.index ["user_id"], name: "index_reviews_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

end
