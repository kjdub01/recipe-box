export const UiReducer = (state = [], action) => {
    switch(action.type) {

        case 'LOADING_RECIPES':
            return {
                loading: true
            }
        
        case 'FETCH_RECIPES':
            return {
                loading: false
            }

        case 'CREATE_RECIPE':
            return {
                loading: false
            }

        case 'DELETE_RECIPES_SUCCESS':
            return {
                deleted: true
            }
                
            
        default:
            return state;
    }
};