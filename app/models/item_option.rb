# == Schema Information
#
# Table name: item_options
#
#  id                     :integer          not null, primary key
#  item_option_section_id :integer          not null
#  name                   :string           not null
#  description            :string
#  price                  :float            default(0.0), not null
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#

class ItemOption < ApplicationRecord
  validates :name, :price, presence: true

  belongs_to :item_option_section
end
