import React from "react"

const RecipeMain = ({recipe}) => {
    return (
        <div className="article">
            <div className="recipe-intro">
                <p className="recipe-description">{recipe.description}</p>
            <div className="recipe-img-container">
                <img className="recipe-img" src={recipe.img} />
            </div>
            </div>
            <div className="recipe-instructions">
                <section className="ingredients-wrap">
                    <h3 className="ingredients-heading">INGREDIENTS</h3>
                    <ul className="ingredients-list">{recipe.ingredients.map(( ingredient) => <li key={ingredient.id}>{ingredient.name}</li>)}</ul> 
                </section>
                <section className="directions-wrap">
                    <h3 className="recipe-directions-heading">PREPARATION</h3>
                    <p className="recipe-steps">{recipe.directions} </p>
                </section>
            </div>
        </div>
    )
}

export default RecipeMain