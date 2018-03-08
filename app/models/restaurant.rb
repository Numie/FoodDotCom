class Restaurant < ApplicationRecord
  validates :name, presence: true, uniqueness: true
  validates :address, :phone, :img_url, :cuisine, :delivery_minimum, :open_time, :close_time, :latitude, :longitude, presence: true

  geocoded_by :address
  after_initialize :geocode

end
