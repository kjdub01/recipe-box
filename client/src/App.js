import React from 'react';
import { connect } from 'react-redux'
import styles from './App.scss'
import { fetchRecipes } from './actions/fetchRecipes.js'
import MainHeader from './components/layout/MainHeader.js'
import MainFooter from './components/layout/MainFooter.js'
import TileIndex from './components/tiles/TileIndex.js';

class App extends React.Component {

  componentDidMount() {
    this.props.fetchRecipes()
  }

  handleLoading = () => {
    console.log(this.props.loading)
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
        <MainFooter />
      </div>
      )
    }
  }

  render() {
    return(
      <div>
        {this.handleLoading()}
      </div>
    )
  }
}

const mapDispatchToProps = state => {
  return {
    recipes: state.recipes,
    loading: state.loading
  }
}


export default connect(mapDispatchToProps, { fetchRecipes}) (App);



