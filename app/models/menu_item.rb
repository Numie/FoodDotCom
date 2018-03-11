# == Schema Information
#
# Table name: menu_items
#
#  id            :integer          not null, primary key
#  restaurant_id :integer          not null
#  name          :string           not null
#  description   :text
#  price         :float            not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class MenuItem < ApplicationRecord
  validates :name, :price, presence: true

  belongs_to :restaurant
  has_many :order_items

end
