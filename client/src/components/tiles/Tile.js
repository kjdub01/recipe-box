import React from 'react'
import TileMain from './TileMain'
import TileFooter from './TileFooter'

class Tile extends React.Component {

    render() {
        const recipes = this.props.recipes,
            tileNodes = recipes.map((recipe, index) => {
            return(
                <div className="tile" key={index}>
                    <TileMain
                    
                    recipeName={recipe.recipe_name}
                    recipeImg={recipe.img}
                    />
               
                    <TileFooter 
                        recipeName={recipe.recipe_name}
                        recipeImg={recipe.img}
                        recipeDescription={recipe.recipe_description}
                        recipeDirections={recipe.recipe_direction}
                        ingredients={recipe.ingredients}
                    />
                </div>
            );
        })
        return (
            <div className="tile-container">
                {tileNodes}   
            </div>
        )
    }
}

export default Tile;