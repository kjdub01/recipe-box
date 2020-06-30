import React from 'react'
import Toggle from '../ToggleRPC.js'
import Box from '../boxes/Box.js'

class TileFooter extends React.Component {

    render() {
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

                    </footer>
                )}
            </ Toggle>
        );
    }
}

export default TileFooter;