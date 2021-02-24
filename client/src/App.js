import React from 'react';
import styles from './App.scss'
import MainHeader from './components/layout/MainHeader.js'
import MainFooter from './components/layout/MainFooter.js'
import TileIndex from './components/tiles/TileIndex.js';

function App () {

    return(
      <div>
        <MainHeader />
        <TileIndex />
        <MainFooter />
      </div>
    )
}

export default App;

//{this.handleLoading()}
//connect(mapDispatchToProps, { fetchRecipes})



