import React from 'react'
import TileMain from './tileMain'
import TileFooter from './tileFooter'
import { Link } from "react-router-dom";
import { connect }  from "react-redux"

const RecipesList = ({recipes}) => {
    return (
        <div className="tile-container"> 
                { recipes && recipes.map(recipe => {
                    return(
                        <div className="tile" key={recipe.id}>
                        <Link style={{ textDecoration: 'none' }} to={"/recipes/" + recipe.id}> 
                            <TileMain recipe={recipe} key={recipe.id}/>
                        </Link>
                            <TileFooter />
                        </div>
                    )
                })}
        </div>
    )
}

const mapStateToProps = state => {
    return  {recipes: state.recipes}
} 

export default connect(mapStateToProps)(RecipesList)