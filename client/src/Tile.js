import React from 'react'
import styles from './App.scss'
import TileMain from './TileMain'
import TileFooter from './TileFooter'

class Tile extends React.Component {

    render() {
        const recipes = this.props.recipes,
            tileNodes = recipes.map((recipe) => {
            return(
                <div className="tile" key={recipe.id.toString}>
                    <TileMain
                    
                    recipeName={recipe.recipe_name}
                    recipeImg={recipe.img}
                    />
               
                    <TileFooter />
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