import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import App from './App';
import rootReducer from './reducers/RootReducer'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddRecipe from './components/recipes/AddRecipe';
import Recipe from './components/recipes/Recipe'

import * as serviceWorker from './serviceWorker';




const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
); /* add reducer, thunk, & Dev tools here */


ReactDOM.render(
  <Provider store={store}>
    <Router >
      <Switch>
        <Route path="/add-recipe" component={AddRecipe} />
        <Route path="/recipes/:recipeId" component={Recipe} />
        <Route exact path="/" component={App} />
      </Switch>
    </Router>
  </ Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
