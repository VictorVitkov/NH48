class Mountain < ApplicationRecord
  validates_presence_of :name, :elevation

  has_many :hikes, through: :mountain_hikes
end
