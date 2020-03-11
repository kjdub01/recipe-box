class RecipeSerializer

  def initialize(recipe_object)
    @recipe = recipe_object
  end

  def to_serialized_json
    options = {
      include: {
        ingredients: {
          only: [:ingredient_name]}
      },
      except: [:created_at, :updated_at]
    }

    @recipe.to_json(options)
  end
end
