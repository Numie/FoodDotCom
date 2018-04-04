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

  has_many :item_option_sections,
    through: :menu_items,
    source: :item_option_sections

  has_many :item_options,
    through: :item_option_sections,
    source: :item_options

  has_many :order_items,
    through: :orders,
    source: :order_items

  has_many :order_item_options,
    through: :order_items,
    source: :order_item_options

  attr_accessor :reviewable

  geocoded_by :address
  after_initialize :ensure_geocode

  def self.all_with_ratings
    Restaurant.select('restaurants.*, COUNT(rating) AS rating_count, AVG(rating) AS rating_avg')
      .joins(:reviews)
      .group('restaurants.id')
  end

  def last_order(user_id)
    Order.where(restaurant_id: self.id, user_id: user_id)
      .order(created_at: :desc)
      .limit(1)
      .pluck(:created_at)
      .first
  end

  def last_review(user_id)
    Review.where(restaurant_id: self.id, user_id: user_id)
      .order(created_at: :desc)
      .limit(1)
      .pluck(:created_at)
      .first
  end

  def reviewable?(user_id)
    last_order = last_order(user_id)
    last_review = last_review(user_id)

    return false if last_order.nil?
    return true if last_review.nil?

    last_order > last_review
  end

  private

  def ensure_geocode
    if self.latitude == 0
      geocode
    end
  end

end
