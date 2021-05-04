
  
import React from "react"
import MainHeader from "../layout/mainHeader"
import MainFooter from "../layout/mainFooter"
import RecipeHeader from "./recipeHeader"
import RecipeMain from "./recipeMain"
import { connect } from 'react-redux'
import { deleteRecipe, fetchRecipes } from '../../actions/recipeActions'

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
    return { fetchRecipes: () => dispatch(fetchRecipes()),
        deleteRecipe: () => dispatch(deleteRecipe(id))
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