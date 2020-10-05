import React from 'react'
import { Link } from 'react-router-dom'

class AddRecipe extends React.Component {

    state = {
        recipeName: '',
        ingredients: '',
        recipeDescription: '',
        recipeDirections: '',
        recipeImg: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });
      };

    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }
    render () {
        return(
            
            <div className="form-bg-overlay">
                <div className="form-bg">
                    <form className="form" onSubmit={this.handleOnSubmit} >
                        <Link to="/">
                            <i className="zmdi zmdi-close zmdi-hc-2x pull-right"   />
                        </Link>
                        <h2 className="form_title">Add Recipe</h2>
                        <input type='text' onChange={this.handleChange} id='recipeName'  placeholder= 'Enter Recipe Name' />
                        <textarea onChange={this.handleChange} id='ingredients' placeholder= "Enter Recipe Ingredients" />
                        <textarea onChange={this.handleChange} id='recipeDescription' placeholder= "Enter Recipe Description" />
                        <textarea onChange={this.handleChange} id='recipeDirections' placeholder= "Enter Recipe Directions" />
                        <input type='text' onChange={this.handleChange} id='recipeImg' placeholder= "Enter Recipe Image URL" />
                        <button className="btn-primary">Submit</button>
                    </form>
                    
                </div>
            </div>
              
        )
    }
}

export default AddRecipe;

/*
ref={input => formFields.img = input}
ref={input => formFields.recipe_direction = input}
ref={input => formFields.recipe_description = input}
ref={input => formFields.recipe_name = input}

*/