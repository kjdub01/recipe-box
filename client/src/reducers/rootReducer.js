import { commentsReducer } from './commentsReducer'
import { recipesReducer } from './recipesReducer'
import { uiReducer } from './uiReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    recipes: recipesReducer,
    comments: commentsReducer,
    ui: uiReducer
});

export default rootReducer