import React from 'react'
import TileMain from './TileMain'
import TileFooter from './TileFooter'
import { Link } from "react-router-dom";  

class Tile extends React.Component {

    render() {
        const recipes = this.props.recipes,
            tileNodes = recipes.map((recipe) => {
                return(
                   
                        <div className="tile" key={recipe.id}>
                            <Link style={{ textDecoration: 'none' }} to={"/recipes/" + recipe.id}>
                            <TileMain
                                recipeName={recipe.name}
                                recipeImg={recipe.img}
                             />
                            </Link> 

                            <TileFooter
                                recipe={recipe} 
                                recipeId={recipe.id}   
                            />   
                        </div>
                       
            );
        })
        return (
            <main className="tile-container">
                {tileNodes}
            </main>
        )
    }
}

export default Tile