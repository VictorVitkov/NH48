class Mountain < ApplicationRecord
  validates_presence_of :name, :elevation

end
