import React from 'react';
import styles from './App.scss'
import MainHeader from './components/layout/MainHeader.js'
import MainFooter from './components/layout/MainFooter.js'
import RecipesContainer from './components/recipes/RecipesContainer.js';

function App () {

    return(
      <>
        <MainHeader />
        <RecipesContainer />
        <MainFooter />
      </>
    )
}

export default App;