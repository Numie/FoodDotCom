# == Schema Information
#
# Table name: order_items
#
#  id                :integer          not null, primary key
#  order_id          :integer          not null
#  menu_item_id      :integer          not null
#  quantity          :integer          not null
#  item_instructions :string
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#

class OrderItem < ApplicationRecord
  validates :quantity, presence: true, numericality: { only_integer: true, greater_then: 0, less_than: 100 }

  belongs_to :order
  belongs_to :menu_item
end