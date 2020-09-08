import React from 'react'
import Toggle from '../ToggleRPC.js'
import Box from '../boxes/Box.js'

class TileFooter extends React.Component {

    constructor(props) {
        super(props)
        this.state = {hover: false}
        this.toggleHover = this.toggleHover.bind(this)
    }
    
    toggleHover() {
        this.setState({hover: !this.state.hover})
    }

    render() {
        let bookmarkStyle;
        if(this.state.hover) {
            bookmarkStyle= "zmdi zmdi-bookmark zmdi-hc-2x btn-bookmark"
        } else {
            bookmarkStyle= "zmdi zmdi-bookmark-outline zmdi-hc-2x btn-bookmark"
        }

        return (
            <Toggle>
                {({ on, toggle }) => (
                    <footer className="tile_footer">
                        {on && <Box toggle={toggle} 
                        recipeName={this.props.recipeName}
                        recipeImg={this.props.recipeImg} 
                        recipeDirections={this.props.recipeDirections} 
                        recipeDescription={this.props.recipeDescription}
                        ingredients={this.props.ingredients}
                        /> }
                        
                        <button className="btn-primary" onClick={toggle}>
                            <i className="zmdi zmdi-open-in-new zmdi-hc-lg btn-icon" /> Open Recipe
                        </button>

                        <i className={bookmarkStyle} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}/>

                    </footer>
                )}
            </ Toggle>
        );
    }
}

export default TileFooter;