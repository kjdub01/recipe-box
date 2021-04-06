import React from 'react'

class TileMain extends React.Component {
    render() {
        let heroDiv;
        if (this.props.recipe.img) {
            heroDiv = <div
                className="tile_hero"
                style={{
                    background: "url(" + this.props.recipe.img + ")", 
                    backgroundSize: "100% auto",
                    backgroundPosition: "center center",	
                    textDecoration: "none"
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
                    <h2 className="tile_title">{this.props.recipe.name}</h2>
                </header>
            </main>
        ); 
    }
}

export default TileMain;