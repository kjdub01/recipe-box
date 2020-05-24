import React from 'react'
//import styles from './App.scss'
import AddButton from './AddButton.js'

class MainHeader extends React.Component {
    
    toggleHidden() {
        if (this.state.isHidden ) {
            this.setState({isHidden: false})
        } else {
            this.setState({isHidden: true})
        }
    }

    render (){
        return(
            <header className='header'>
                <div className="container flex-container">
                <h1>Recipe Box</h1>
                    <AddButton
                        toggleHidden={this.toggleHidden.bind(this)}
                    />
                </div>
            </header>  
        );
    }    
}

export default MainHeader; 