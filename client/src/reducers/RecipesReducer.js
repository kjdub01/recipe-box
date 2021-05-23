export const RecipesReducer = (state = [], action) => {
    switch (action.type) {

        case 'FETCH_RECIPES':
            return action.recipes

        case 'CREATE_RECIPE':
            return [...state, action.recipe]

        case 'CREATE_RECIPE_ERROR':
            console.log('create project error', action.err)
            return state

        case 'DELETE_RECIPE':
            const recipes = state.filter(recipe => recipe.id !== action.id)
            return recipes

        default:
            return state;
    }
};