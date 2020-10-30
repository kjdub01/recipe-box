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
      render json: { message: "Recipe Not Found"}
    end
  end

  def create
    recipe = Recipe.new(recipe_params)

    if recipe.save
      render json: RecipeSerializer.new(recipe).to_serialized_json
    else 
      render json: (error: recipes.errors.messages), status: 422
    end
  end

  def update 
    recipe = Recipe.find_by(id: params[:id])

    if recipe.update(recipe_params)
      render json: RecipeSerializer.new(recipe).to_serialized_json
    else 
      render json: (error: recipes.errors.messages), status: 422
    end
  end

  def destroy
    recipe = Recipe.find_by(id: params[:id])

    if recipe.destroy
      render head :no_content
    else 
      render json: (error: recipes.errors.messages), status: 422
    end

  end

  private

  def recipe_params
    params.require(:recipe).permit(
      :recipe_name, :recipe_description, :recipe_direction, :img,
      ingredients: ingredient_name)
  end
end
