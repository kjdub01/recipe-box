import authReducer from './authReducer'
import reciepeReducer from './recipeReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    auth: authReducer,
    recipe: reciepeReducer
});

export default rootReducer