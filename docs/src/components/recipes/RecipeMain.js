import React from "react"
import CommentsContainer from "../comments/CommentsContainer";

const RecipeMain = ({ recipe }) => {
    return (
        <div className="article">
            <div className="recipe-intro">
                <div className="recipe-img-container">
                    <picture>
                        <img className="recipe-img" src={recipe.img} alt="" />
                    </picture>
                </div>
                <div className="top-note">
                    <p className="recipe-description">{recipe.description}</p>
                </div>
            </div>
            <div className="recipe-instructions">
                <section className="ingredients-wrap">
                    <h3 className="ingredients-heading">INGREDIENTS</h3>
                    <ul className="ingredients-list">{recipe.ingredients.map((ingredient) => <li key={ingredient.id}>{ingredient.name}</li>)}</ul>
                </section>
                <section className="directions-wrap">
                    <h3 className="recipe-directions-heading">PREPARATION</h3>
                    <p className="recipe-steps">{recipe.directions} </p>
                    <div className="comments-mount">
                        <CommentsContainer recipeId={recipe.id} />
                    </div>
                </section>
            </div>
        </div>
    )
}

export default RecipeMain