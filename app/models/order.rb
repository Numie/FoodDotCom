# == Schema Information
#
# Table name: orders
#
#  id                    :integer          not null, primary key
#  user_id               :integer          not null
#  restaurant_id         :integer          not null
#  subtotal              :float            not null
#  tax                   :float            not null
#  tip                   :float
#  delivery_fee          :float
#  total                 :float            not null
#  delivery_instructions :string
#  created_at            :datetime         not null
#  updated_at            :datetime         not null
#

class Order < ApplicationRecord
  validates :subtotal, :tax, :total, presence: true

  belongs_to :user
  belongs_to :restaurant
  has_many :order_items
end
