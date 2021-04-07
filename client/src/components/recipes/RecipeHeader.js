import React from 'react'

const RecipeHeader = ({recipeName}) => {
    return (
        <header className="title-container">
                <h1 className="recipe-title">{recipeName}</h1>
        </header>
    )
}

export default RecipeHeader