import React from 'react'
import { Link } from 'react-router-dom'

const RecipeHeader = (props) => {
    return (
        <header>
            <div className="title-container">
                <h1 className="recipe-title">{props.recipe.name}</h1>
            </div>
            <div className="recipe-controls-primary">
                <Link to='/'>
                <button className="btn-warning" onClick={() => {props.deleteRecipe(props.recipe.id)}}>Delete Recipe</button>
                </Link>
            </div>
        </header>
    )
}

export default RecipeHeader