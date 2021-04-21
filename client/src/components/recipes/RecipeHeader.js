import React from 'react'
import { connect } from 'react-redux'
import { deleteRecipe } from '../../actions/recipeActions'

const RecipeHeader = (props) => {
    const handleClick = () => {
        props.deleteRecipe(props.recipe.id)
        props.goBack()
    }

    return (
        <header>
            <div className="title-container">
                <h1 className="recipe-title">{props.recipe.name}</h1>
            </div>
            <div className="recipe-controls-primary">
                <button className="btn-warning" onClick={handleClick}>Delete Recipe</button>
            </div>
        </header>
    )
}

export default connect(null, { deleteRecipe })(RecipeHeader)