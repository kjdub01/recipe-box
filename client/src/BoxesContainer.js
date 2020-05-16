import React from 'react'
import styles from './App.css'
import MainHeader from './MainHeader'
import MainFooter from './MainFooter'
import TileIndex from './TileIndex';

class BoxesContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: []
        }
    }

    componentDidMount() {
        fetch('/recipes')
            .then(response => {return response.json()})
            .then(data => {this.setState({ recipes: data }) });
    }

    render() {
        return(
            <div>
                <MainHeader />
                <TileIndex
                    recipes={this.state.recipies}
                    //show={this.showBox.bind(this)}
                />
                <MainFooter />
            </div>
        );
    }
}

export default BoxesContainer;