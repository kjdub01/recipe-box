import React from 'react'
import { connect } from 'react-redux'
import { createRecipe } from '../../actions/RecipeActions.js'

class AddRecipe extends React.Component {
    constructor() {
        super();

        this.state = {
            name: '',
            ingredients_attributes: [
                {
                    name: ''
                }
            ],
            description: '',
            directions: '',
            img: ''
        }
        this.goBack = this.goBack.bind(this);
    }

    goBack() {
        this.props.history.goBack();
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.createRecipe(this.state);
        this.props.history.push('/')
    }

    addIngrident = (event) => {
        let ingredientNames = event.target.value.split('\n')
        let ingridentObjects = ingredientNames.map((name) => ({ name: name }))

        this.setState({
            [event.target.id]: ingridentObjects
        });
    }

    render() {
        return (
            <div className="form-bg-overlay">
                <div className="form-bg">
                    <form className="form" onSubmit={this.handleOnSubmit} >
                        <i className="zmdi zmdi-close zmdi-hc-2x pull-right" onClick={this.goBack} />
                        <h2 className="form_title">Add Recipe</h2>

                        <input type='text' onChange={this.handleChange} id='name' placeholder='Enter Recipe Name' />
                        <textarea onChange={this.addIngrident} id='ingredients_attributes' placeholder="Enter Recipe Ingredients" />
                        <textarea onChange={this.handleChange} id='description' placeholder="Enter Recipe Description" />
                        <textarea onChange={this.handleChange} id='directions' placeholder="Enter Recipe Directions" />
                        <input type='text' onChange={this.handleChange} id='img' placeholder="Enter Recipe Image URL" />
                        <button className="btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default connect(null, { createRecipe })(AddRecipe);