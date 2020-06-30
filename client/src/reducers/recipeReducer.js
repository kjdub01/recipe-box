function recipeReducer(
    state = {
        recipes: []
    },
    action
) {
    switch (action.type) {
        case 'ADD_Recipe':
            return { 
                ...state,
                recipes: state.recipes.concat(state.recipies)
            }
        default: 
            return state;
    }
}

export default recipeReducer;