const recipeReducer = (state = {recipes: [], loading: false}, action) => {
    switch(action.type) {

        case 'LOADING_RECIPES':
            return {
                ...state,
                recipes: [...state.recipes],
                loading: true
            }

        case 'ADDING_RECIPES':
            return {
                ...state,
                recipes: action.recipes,
                loading: false
            }

        case 'CREATE_RECIPE':
                console.log('created recipe', action.recipe);
                return state;

        case 'CREATE_RECIPE_ERROR':
            console.log('create_recipe_error', action.error)
            

        default:
            return state;
    }
};
    

export default recipeReducer;

