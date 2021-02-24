import React from "react"

class RecipeMain extends React.Component {
    render() {
        console.log(this.props.img)
        return(
           <div className="recipe-intro">
               <p className="recipe-description">{this.props.recipeDescription}</p>
               <div className="recipe-img-container">
                    <img className="recipe-img" src={this.props.img} />
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