
  
import React from "react"
import MainHeader from "../layout/MainHeader"
import MainFooter from "../layout/MainFooter"
import RecipeHeader from "./RecipeHeader"
import RecipeMain from "./RecipeMain"
import { connect } from 'react-redux'
import { deleteRecipe, fetchRecipes } from '../../actions/RecipeActions'

class Recipe extends React.Component {
    
    componentDidMount() {
        this.props.fetchRecipes()
  }    

    handleLoading = () => {
        if (!this.props.recipe){
            return <div>Loading ...</div>
        } else{
            return(
                <div>
                    <MainHeader />
                        <div className="recipe">
                            <RecipeHeader
                                recipe = {this.props.recipe} deleteRecipe = {this.props.deleteRecipe} 
                            />
                            <RecipeMain
                                recipe={this.props.recipe} 
                            />
                        </div>
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

function mapDispatchToProps(dispatch, ownProps) {
    const findId = ownProps.match.params.recipeId
    const id = parseInt(findId, 10)
    const history = ownProps.history
    return { fetchRecipes: () => dispatch(fetchRecipes()),
        deleteRecipe: () => dispatch(deleteRecipe(id, history))
    }
}

function mapStateToProps(state, ownProps){
    const findId = ownProps.match.params.recipeId
    const id = parseInt(findId, 10)
    const recipes = state.recipes
    const recipe = recipes ? recipes.find(recipe => recipe.id === id) : null
    return {recipe: recipe}
}

export default connect(mapStateToProps, mapDispatchToProps) (Recipe)