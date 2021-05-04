export const recipesReducer = (state = [], action) => {
    switch(action.type) {

        //case 'LOADING_RECIPES':
            //return state.loading = true
        
        case 'FETCH_RECIPES':
            return action.recipes
                //state.loading = false

        case 'CREATE_RECIPE':
            return [...state.recipes, action.recipe]
                //loading false    

        case 'CREATE_RECIPE_ERROR':
             console.log('create project error', action.err)
             return state

        case 'DELETE_RECIPE':
        const recipes = state.filter(recipe => recipe.id !== action.id)
        return recipes
                

        //case 'DELETE_RECIPES_SUCCESS':
            //return
                //state.deleted = true
            
        default:
            return state;
    }
};