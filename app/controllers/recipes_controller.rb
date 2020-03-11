class RecipesController < ApplicationController
  def index
    recipes = Recipe.all
    render json: recipes, only: [:id, :recipe_name]
  end

  def show
    recipe = Recipe.find_by(id: params[:id])
    if recipe
      render json: recipe.to_json(:include => {
        :ingredients => {:only => [:ingredient_name]}
        },
        except: [:created_at, :updated_at])
    else
      render json: { message: "Recipe Not Found"}
    end
  end
end
