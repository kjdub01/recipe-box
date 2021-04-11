import { commentsReducer } from './commentsReducer'
import { recipesReducer } from './recipesReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    recipes: recipesReducer,
    comments: commentsReducer
});

export default rootReducer