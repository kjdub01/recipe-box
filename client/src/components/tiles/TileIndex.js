import React from 'react'
import { connect } from 'react-redux'
import Tile from './Tile'
import { fetchRecipes } from '../../actions/recipeActions.js'

class TileIndex extends React.Component {
    componentDidMount() {
        this.props.fetchRecipes()
  }

  componentDidUpdated() {
      if (this.props.deleted)
      this.props.fetchRecipes()
  }

    handleLoading = () => {
        if(this.props.loading) {
          return <div>Loading...</div>
        } else {
          return(
              <Tile
                recipes={this.props.recipes}
              /> 
          )
        }
      }

    render() {
        return(
            <div className='container'>
                {this.handleLoading()}
            </div>
        )    
    }
}

function mapDispatchToProps(dispatch) {
    return { fetchRecipes: () => dispatch(fetchRecipes()) }
}

function mapStateToProps(state){
    return {recipes: state.recipes.recipes,
            loading: state.recipes.loading}
  }

export default connect(mapStateToProps, mapDispatchToProps)(TileIndex);