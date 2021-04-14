import React from 'react'

const RecipeHeader = ({recipeName}) => {
    return (
        <header>
            <div className="title-container">
                <h1 className="recipe-title">{recipeName}</h1>
            </div>
            <div className="recipe-controls-primary">
                <button className="btn-warning">Delete Recipe</button>
            </div>
        </header>
    )
}

export default RecipeHeader