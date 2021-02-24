import React from 'react'
import { connect } from 'react-redux'
import Tile from './Tile'
import { fetchRecipes } from '../../actions/fetchRecipes.js'

class TileIndex extends React.Component {
    componentDidMount() {
        this.props.fetchRecipes()
  }

    handleLoading = () => {
        if(this.props.loading) {
          return <div>Loading...</div>
        } else {
          return(
            <div>
              <Tile
                recipes={this.props.recipes}
              />
          </div> 
          )
        }
      }

    render() {
        return(
            <div className='container'>
                <main className="tile-container">
                    {this.handleLoading()}
                </main>
            </div>
        )    
    }
}

function mapDispatchToProps(dispatch) {
    return { fetchRecipes: () => dispatch(fetchRecipes()) }
}

function mapStateToProps(state){
    return {recipes: state.recipe.recipes,
            loading: state.recipe.loading}
  }

export default connect(mapStateToProps, mapDispatchToProps)(TileIndex);