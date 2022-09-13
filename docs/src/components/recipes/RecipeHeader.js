import React from 'react'

const RecipeHeader = (props) => {
    return (
        <header>
            <div className="title-container">
                <h1 className="recipe-title">{props.recipe.name}</h1>
            </div>
            <div className="recipe-controls-primary">
                <button className="btn-warning" onClick={() => { props.deleteRecipe() }}>Delete Recipe</button>
            </div>
        </header>
    )
}

export default RecipeHeader