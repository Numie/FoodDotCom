# == Schema Information
#
# Table name: item_option_sections
#
#  id          :integer          not null, primary key
#  item_id     :integer          not null
#  name        :string           not null
#  description :text
#  required?   :boolean          default(FALSE), not null
#  min_allowed :integer          not null
#  max_allowed :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class ItemOptionSection < ApplicationRecord
  validates :name, :required?, :min_allowed, :max_allowed, presence: true
  validates :required?, inclusion: { in: [true, false] }

  belongs_to :item,
    class_name: "MenuItem",
    primary_key: :id,
    foreign_key: :item_id

  has_many :item_options
end
