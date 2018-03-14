# == Schema Information
#
# Table name: reviews
#
#  id            :integer          not null, primary key
#  user_id       :integer          not null
#  restaurant_id :integer          not null
#  rating        :integer          default(5), not null
#  review        :text             not null
#

class Review < ApplicationRecord
  validates :rating, presence: true
  validates :review, presence: true, length: { maximum: 2000 }

  belongs_to :user
  belongs_to :restaurant
end
