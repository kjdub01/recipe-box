import React from 'react';
import styles from './App.scss'
import MainHeader from './components/layout/mainHeader.js'
import MainFooter from './components/layout/mainFooter.js'
import RecipesContainer from './components/recipes/recipesContainer.js';

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

//{this.handleLoading()}
//connect(mapDispatchToProps, { fetchRecipes})



