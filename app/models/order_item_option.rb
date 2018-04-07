# == Schema Information
#
# Table name: order_item_options
#
#  id             :integer          not null, primary key
#  order_item_id  :integer          not null
#  item_option_id :integer          not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class OrderItemOption < ApplicationRecord
  belongs_to :order_item
  belongs_to :item_option
end
