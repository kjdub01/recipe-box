import React from "react"

class RecipeMain extends React.Component {

    render() {
        return(
            <div className="article">
                <div className="recipe-intro">
                    <p className="recipe-description">{this.props.recipeDescription}</p>
                <div className="recipe-img-container">
                    <img className="recipe-img" src={this.props.img} />
                </div>
                </div>
                <div className="recipe-instructions">
                    <section className="ingredients-wrap">
                        <h3 className="ingredients-heading">INGREDIENTS</h3>
                        <ul className="ingredients-list">{this.props.ingredients.map(( ingredient) => <li key={ingredient.id}>{ingredient.name}</li>)}</ul> 
                    </section>
                    <section className="directions-wrap">
                        <h3 className="recipe-directions-heading">PREPARATION</h3>
                        <p className="recipe-steps">{this.props.recipeDirections} </p>
                    </section>
                </div>
            </div>
        )
    }
}

export default RecipeMain
/*
 <div>
                <div className="recipe-intro">
                <p className="recipe-description">{this.props.recipeDescription}</p>
                <div className="recipe-img"style={{
                background: "url(" + this.props.img + ")", 
                backgroundSize: "100% auto",
                backgroundPosition: "center center",	
                textDecoration: "none"
            }}>
                    
                </div>
            </div>
            <div /*className="recipe-instructions">
                <div /*className="ingredients">
            
                </div>
                <div /*className="directions">
            
                </div>
            </div>
        </div>
        */