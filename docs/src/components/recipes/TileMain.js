import React from 'react'

const TileMain = ({ recipe }) => {
    let heroDiv

    switch (recipe.img === null) {
        default:
        case true:
            heroDiv = <div className='title_hero' />
            break;
        case false:
            heroDiv = <div className="tile_hero" style={{
                background: "url(" + recipe.img + ")",
                backgroundSize: "100% auto",
                backgroundPosition: "center center",
                textDecoration: "none"
            }}
            />
    }

    return (
        <main className='tile_main'>
            {heroDiv}
            <header className='tile_header'>
                <h2 className="tile_title">{recipe.name}</h2>
            </header>
        </main>
    )
}

export default TileMain;