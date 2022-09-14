class RecipesSerializer

    def initialize(recipes_object)
      @recipes = recipe_object
    end
  
    def to_serialized_json
      options = {
        include: [:ingredients: {
          only: [:id, :name]
        }],
        except: [:created_at, :updated_at]
      }
  
      @recipes.to_json(options)
    end
  end