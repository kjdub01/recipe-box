import React from 'react'
import styles from './App.css'
import Tile from './Tile'

class TileIndex extends React.Component {

    render() {
        const data =this.props.data,
            titleNodes = data.map( (data) => {
                return (
                    <Tile
                        show={this.props.show}
                        data={data}
                    />
                );
            });
        return (
            <div className='container'>
                <main className="tile-container">
                    {titleNodes}
                </main>
            </div>
        );    
    }
}

export default TileIndex;