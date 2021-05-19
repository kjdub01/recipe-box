import React from 'react'
import { connect } from 'react-redux'
import RecipesList from './RecipesList'
import { fetchRecipes } from '../../actions/RecipeActions.js'

class RecipesContainer extends React.Component {
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
              <RecipesList /> 
          )
        }
      }

    render() {
        return(
            <div className='main-container'>
                {this.handleLoading()}
            </div>
        )    
    }
}

function mapDispatchToProps(dispatch) {
    return { fetchRecipes: () => dispatch(fetchRecipes()) }
}

function mapStateToProps(state){
    return {loading: state.loading}
  }

export default connect(mapStateToProps, mapDispatchToProps)(RecipesContainer);
