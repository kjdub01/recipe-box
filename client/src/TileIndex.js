import React from 'react'
import Tile from './Tile'

class TileIndex extends React.Component {
    render() {
        return(
            <div className='container'>
                <main className="tile-container">
                    <Tile recipes={this.props.recipes} />
                </main>
            </div>
        )    
    }
}

export default TileIndex;