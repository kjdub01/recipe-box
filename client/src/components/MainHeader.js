import React from 'react'
//import styles from './App.scss'
import AddRecipe from './AddRecipe.js'
import Toggle from './ToggleRPC.js'

class MainHeader extends React.Component {

    render (){
        return(
            <Toggle>
                {({ on, toggle }) => (
                    <header className='header'>
                        <div className="container flex-container">
                            <h1>Recipe Box</h1>
                            {on && <AddRecipe toggle={toggle} handleFormSubmit={this.props.handleFormSubmit}/>}
                            <button className="action pull-right btn-primary" onClick={toggle}>Add Recipe</button>   
                        </div>
                    </header> 
                )}
            </Toggle> 
        );
    }    
}

export default MainHeader; 