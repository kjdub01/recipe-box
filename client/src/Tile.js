import React from 'react'
import styles from './App.css'
import TileMain from './TileMain'
import TileFooter from './TileFooter'

class Tile extends React.Component {

    render() {
        const recipes = this.props.recipes,
            tileNodes = recipes.map((recipe) => {
            return(
                <div>
                    <TileMain
                    key={recipe.id}
                    recipeName={recipe.recipe_name}
                    recipeImg={recipe.img}
                    />
               
                    <TileFooter />
                </div>
            );
        })
        return (
            <div>
                {tileNodes}   
            </div>
        )
    }
}

export default Tile;