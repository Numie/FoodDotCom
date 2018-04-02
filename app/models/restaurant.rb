# == Schema Information
#
# Table name: restaurants
#
#  id               :integer          not null, primary key
#  name             :string           not null
#  address          :string           not null
#  phone            :string           not null
#  img_url          :string           not null
#  cuisine          :string           not null
#  delivery_minimum :float            not null
#  delivery_fee     :float
#  open_time        :string           not null
#  close_time       :string           not null
#  latitude         :float            not null
#  longitude        :float            not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  city             :string           default("New York"), not null
#  state            :string           default("NY"), not null
#  zip              :string           default("10003"), not null
#

class Restaurant < ApplicationRecord
  validates :name, :address, :phone, :img_url, :cuisine, :delivery_minimum, :open_time, :close_time, :latitude, :longitude, presence: true

  has_many :menu_items
  has_many :orders
  has_many :reviews

  has_many :order_items,
    through: :orders,
    source: :order_items

  geocoded_by :address
  after_initialize :ensure_geocode

  def self.all_with_ratings
    Restaurant.select('restaurants.*, COUNT(rating) AS rating_count, AVG(rating) AS rating_avg')
      .joins(:reviews)
      .group('restaurants.id')
  end

  def reviewable?(user_id)
    last_order = Order.where(restaurant_id: self.id, user_id: user_id)
      .order(created_at: :desc)
      .limit(1)
      .pluck(:created_at)
      .first

    last_review = Review.where(restaurant_id: self.id, user_id: user_id)
      .order(created_at: :desc)
      .limit(1)
      .pluck(:created_at)
      .first

    last_order > last_review
  end

  private

  def ensure_geocode
    if self.latitude == 0
      geocode
    end
  end

end
