import React from 'react'
import styles from './App.scss'

class TileMain extends React.Component {
    render() {
        var heroDiv;
        if (this.props.recipeImg) {
            heroDiv = <div
                className="tile_hero"
                style={{
                    background: "url(" + this.props.recipeImg + ")", 
                    backgroundSize: "100% auto",
                    backgroundPosition: "center center"	
                }}
            />
        } else {
            heroDiv = <div
                className = 'title_hero'
                />
        }
        return (
            <main className='tile_main'>
                {heroDiv}
                <header className='tile_header'>
                    <h2 className="tile_title">{this.props.recipeName}</h2>
                </header>
            </main>
        ); 
    }
}

export default TileMain;