export const UiReducer = (state = [], action) => {
    switch (action.type) {

        case 'LOADING_RECIPES':
            return true

        case 'FETCH_RECIPES':
            return false

        case 'CREATE_RECIPE':
            return false

        case 'DELETE_RECIPES_SUCCESS':
            return true

        default:
            return state;
    }
};