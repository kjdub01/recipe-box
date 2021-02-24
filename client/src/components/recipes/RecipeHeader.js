import React from 'react'

class RecipeHeader extends React.Component {

    render() {
        return(
            <header className="title-container">
                <h1 className="recipe-title">{this.props.recipeName}</h1>
            </header>
        )
    }
}

export default RecipeHeader