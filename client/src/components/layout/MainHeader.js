import React from 'react'
//import styles from './App.scss'
import AddRecipe from '../recipies/AddRecipe.js'
import Toggle from '../ToggleRPC.js'
import { Link } from 'react-router-dom'

class MainHeader extends React.Component {

    render (){
        return(
            <Toggle>
                {({ on, toggle }) => (
                    <header className='header'>
                        <div className="container flex-container">
                            <h1>Recipe Box</h1>
                            {on && <AddRecipe toggle={toggle} handleFormSubmit={this.props.handleFormSubmit}/>}
                            <Link to='add-recipe'>
                                <button className="action pull-right btn-primary" onClick={toggle}>Add Recipe</button>
                            </Link>   
                        </div>
                    </header> 
                )}
            </Toggle> 
        );
    }    
}

export default MainHeader; 