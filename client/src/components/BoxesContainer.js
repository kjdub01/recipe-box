import React from 'react'
import MainHeader from './MainHeader'
import MainFooter from './MainFooter'
import TileIndex from './tiles/TileIndex';

class BoxesContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: []
        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
        this.addNewRecipe = this.addNewRecipe.bind(this)
    }

    handleFormSubmit(recipe_name, recipe_description, img, recipe_direction, ingredients){
        let body = JSON.stringify({recipe: {recipe_name: recipe_name, recipe_description: recipe_description, recipe_direction: recipe_direction, img: img, ingredients: []} })

        fetch('http://localhost:3001/recipes')
    }

    componentDidMount() {
        fetch('/recipes')
            .then(response => {return response.json()})
            .then(data => {this.setState({ recipes: data }) });
    }

    render() {
        return(
            <div>
                <MainHeader handleFormSubmit={this.handleFormSubmit}/>
                <TileIndex
                    recipes={this.state.recipes}
                    //show={this.showBox.bind(this)}
                />
                <MainFooter />
            </div>
        );
    }
}

export default BoxesContainer;