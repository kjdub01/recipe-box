class RecipesController < ApplicationController
  def index
    recipes = Recipe.all
    render json: RecipeSerializer.new(recipes).to_serialized_json
  end

  def show
    recipe = Recipe.find_by(id: params[:id])
    if recipe
      render json: RecipeSerializer.new(recipe).to_serialized_json
    else
      render json: "error"
    end
  end

  def create
    recipe = Recipe.new(recipe_params)

    if recipe.save
      render json: RecipeSerializer.new(recipe).to_serialized_json
    else 
      render json: "error"
    end
  end

  def update 
    recipe = Recipe.find_by(id: params[:id])

    if recipe.update(recipe_params)
      render json: RecipeSerializer.new(recipe).to_serialized_json
    else 
      render "error"
    end
  end

  def destroy
    recipe = Recipe.find_by(id: params[:id])
    recipe.destroy
    head :no_content
  end

  private

  def recipe_params
    params.require(:recipe).permit(
      :name, 
      :description, 
      :directions, 
      :img,
      ingredients_attributes: [:id, :name]
      )
  end
end
