class MenuItem < ApplicationRecord
  validates :name, :price, presence: true

  belongs_to :restaurant

end
