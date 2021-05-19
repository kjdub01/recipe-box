import { CommentsReducer } from './CommentsReducer'
import { RecipesReducer } from './RecipesReducer'
import { UiReducer } from './UiReducer'
import { combineReducers } from 'redux'

const RootReducer = combineReducers({
    recipes: RecipesReducer,
    comments: CommentsReducer,
    ui: UiReducer
});

export default RootReducer