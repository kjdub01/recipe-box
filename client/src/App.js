import React from 'react';
import styles from './App.scss'
import MainHeader from './components/layout/MainHeader.js'
import MainFooter from './components/layout/MainFooter.js'
import TileIndex from './components/tiles/TileIndex.js';
import ModalRootContainter from './Modal/ModalRootContainer'

function App ({children}) {

  componentDidMount() {
    this.props.fetchRecipes()
  }

  handleLoading = () => {
    if(this.props.loading) {
      return <div>Loading...</div>
    } else {
      return(
        <div>
        <MainHeader />
        <TileIndex
          recipes={this.props.recipes}
          //show={this.showBox.bind(this)}
        />
          {children}
          <ModalRootContainter />
        <MainFooter />
      </div> 
      )
    }
  }

 
    return(
      <div handleLoading >

      </div>
    )
  }

const mapDispatchToProps = state => {
  return {
    recipes: state.recipe.recipes,
    loading: state.recipe.loading
  }
}


export default App;

//{this.handleLoading()}
//connect(mapDispatchToProps, { fetchRecipes})



