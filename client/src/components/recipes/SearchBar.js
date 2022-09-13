import React from "react"
import RecipesList from "./RecipesList"

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: '',
        }
    }

    handleChange = (event) => {
        this.setState({
            inputValue: event.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
    }


    render() {
        const filterRecipes = this.props.recipes.filter(recipe => recipe.name.toLowerCase().includes(this.state.inputValue.toLowerCase()))

        return (
            <>
                <form className="form" onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} placeholder="Find Recipe" />
                </form>
                <RecipesList recipes={filterRecipes} />
            </>
        )
    }
}

export default SearchBar;