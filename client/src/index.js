import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import recipeReducer from './reducers/recipeReducer'
import * as serviceWorker from './serviceWorker';
import AddRecipe from './components/recipies/AddRecipe';

const store = createStore(recipeReducer, applyMiddleware(thunk)); /* add reducer here */

ReactDOM.render(
    <Provider store={store}>
    <Router>
      <Route exact path="/" component={App} />
      <Route path="/add-recipe" component={AddRecipe} />
    </Router>
    </ Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
