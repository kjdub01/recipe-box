class Recipe < ApplicationRecord
  has_many :user_recipes
  has_many :users, through: :user_recipes
  has_many :ingredients
  accepts_nested_attributes_for :ingredients, reject_if: :all_blank, allow_destroy: true
end
