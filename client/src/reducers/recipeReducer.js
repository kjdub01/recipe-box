const recipeReducer = (state = {recipes: [], requesting: false}, action) => {
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
            return{
                recipes: console.log('created recipe', action.recipe)
        
          //      ...state,
          //      recipes: [...state.recipes, action.recipe]
            }


        default:
            return state;
    }
};
    

export default recipeReducer;

