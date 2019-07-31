class Hike < ApplicationRecord
  validates_presence_of :name, :date, :description

  belongs_to :users
  has_many :mountains, through: :mountain_hikes
end
