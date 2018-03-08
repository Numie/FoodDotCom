class Restaurant < ApplicationRecord
  validates :name, presence: true, unique: true
  validates :address, :phone, :img_url, :cuisine, :delivery_minimum, :open_time, :close_time, :lat, :lng, presence: true
end
