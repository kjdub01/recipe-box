class Recipe < ApplicationRecord
  has_many :comments
  has_many :ingredients
  accepts_nested_attributes_for :ingredients, allow_destroy: true
end
