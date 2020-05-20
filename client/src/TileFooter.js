import React from 'react'
import styles from './App.scss'

class TileFooter extends React.Component {

    render() {
        return (
            <footer className="tile_footer">
                <button className="btn-primary">
                    Click to Open Recipe
                </button>
            </footer>
        );
    }
}

export default TileFooter;