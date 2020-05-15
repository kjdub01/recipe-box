class RecipesController < ApplicationController
  def index
    recipes = Recipe.all
    render json: recipes, only: [:id, :recipe_name, :img]
  end

  def show
    recipe = Recipe.find_by(id: params[:id])
    if recipe
      render json: RecipeSerializer.new(recipe).to_serialized_json
    else
      render json: { message: "Recipe Not Found"}
    end
  end
end
