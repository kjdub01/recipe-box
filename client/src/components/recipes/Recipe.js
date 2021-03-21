import React from "react"
import MainHeader from "../layout/MainHeader"
import MainFooter from "../layout/MainFooter"
import RecipeHeader from "./RecipeHeader"
import RecipeMain from "./RecipeMain"
import { connect } from 'react-redux'
import { fetchRecipes } from '../../actions/fetchRecipes'


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
                                recipeName = {this.props.recipe.recipe_name} 
                            />
                            <RecipeMain 
                                recipeDescription = {this.props.recipe.recipe_description}
                                recipeDirections = {this.props.recipe.recipe_direction}
                                img = {this.props.recipe.img}
                                ingredients = {this.props.recipe.ingredients}
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

function mapDispatchToProps(dispatch) {
    return { fetchRecipes: () => dispatch(fetchRecipes()) }
}

function mapStateToProps(state, ownProps){
    const id = ownProps.match.params.recipeId
    const recipes = state.recipe.recipes
    const recipe = recipes ? recipes[id -1] : null
    return {recipe: recipe}
}

export default connect(mapStateToProps, mapDispatchToProps) (Recipe)

//export default Recipe;