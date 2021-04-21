
export const recipesReducer = (state = {recipes: [], loading: false}, action) => {
    switch(action.type) {

        case 'LOADING_RECIPES':
            return { ...state,
                recipes: [...state.recipes],
                loading: true
            }
        
        case 'ADDING_RECIPES':
            return { ...state,
                recipes: action.recipes,
                loading: false
            }

        case 'CREATE_RECIPE':
            return { ...state,
                recipes: [...state.recipes, action.recipe],
                loading: false 
            }   

        case 'CREATE_RECIPE_ERROR':
             console.log('create project error', action.err)
             return {
                 state
             }

        case 'DELETE_RECIPE':
            const recipes = state.recipes.filter(recipe => recipe.id !== action.id)
            const comments = state.comments.filter(comment => comment.recipe_id !== action.id)
             return {
                recipes: recipes,
                comments: comments //state.recipes.filter(recipe => recipe.id !== action.id)
             }
            
        default:
            return state;
    }
};