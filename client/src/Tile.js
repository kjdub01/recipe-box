import React from 'react'
import styles from './App.css'
import TileMain from './TileMain'
import TileFooter from './TileFooter'

class Tile extends React.Componet {

    render() {
        return (
            <div>
                <TileMain />
                <TileFooter />
            </div>
        )
    }
}

export default Tile;