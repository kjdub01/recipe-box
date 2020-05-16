import React from 'react'
import styles from './App.css'
import Tile from './Tile'

class TileIndex extends React.Component {

    render() {
        const recipes = this.state.recipes.map((recipe) => {
            return(
                <div key ={recipe.id}>
                    <h1>{recipe.recipe_name}</h1>
                    <p>{recipe.img}</p>
                </div>
            );
        })
        return(
            <div className='container'>
                <main className="tile-container">
                    {recipes}
                </main>
            </div>
        )    
    }
}

export default TileIndex;