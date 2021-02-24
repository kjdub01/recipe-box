import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AddRecipe from './components/recipes/AddRecipe';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp'
import Recipe from './components/recipes/Recipe'
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'
import * as serviceWorker from './serviceWorker';




const store = createStore(rootReducer, applyMiddleware(thunk)); /* add reducer here */


ReactDOM.render(
    <Provider store={store}>
      <Router >
        <Switch>
          <Route path="/add-recipe" component={AddRecipe} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/recipes/:recipeId" component={Recipe} />
          <Route path="/" component={App} />
        </Switch>
      </Router>
    </ Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
