class Restaurant < ApplicationRecord
  validates :name, :address, :phone, :img_url, :cuisine, :delivery_minimum, :open_time, :close_time, :latitude, :longitude, presence: true

  geocoded_by :address
  after_initialize :ensure_geocode

  private

  def ensure_geocode
    if self.latitude == 0
      geocode
    end
  end

end
