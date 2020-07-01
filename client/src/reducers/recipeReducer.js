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
        default:
            return state;
    }
};
    

export default recipeReducer;