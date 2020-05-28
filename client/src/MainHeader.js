import React from 'react'
//import styles from './App.scss'
import AddButton from './AddButton.js'
import AddRecipe from './AddRecipe.js'

class MainHeader extends React.Component {

    constructor(props) {
        super(props) 
        this.state = { isEmptyState: true}
    }
    
    toggleHidden = () => {
       this.setState({
           ...this.state,
           isEmptyState: false,
           isToggleHidenState: true
       })
    }

    render (){
        return(
            <header className='header'>
                <div className="container flex-container">
                <h1>Recipe Box</h1>
                    {this.state.isEmptyState && <AddButton toggleHidden={this.toggleHidden} />}

                    {this.state.isToggleHidenState && <AddRecipe />}
                </div>
            </header>  
        );
    }    
}

export default MainHeader; 