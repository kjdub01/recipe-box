import React from 'react'
import Toggle from './ToggleRPC.js'
import BoxesContainer from './BoxesContainer.js'

class AddRecipe extends React.Component {

    render() {

        let formFields = {}
        return(
            
            <div className="form-bg-overlay">
                <div className="form-bg">
                    <form className="form">
                        <i className="zmdi zmdi-close zmdi-hc-2x pull-right"  onClick={this.props.toggle}/> 
                        <h2 className="form_title">Add Recipe</h2>
                        <input type='text' ref={input => formFields.recipe_name = input} placeholder= 'Enter Recipe Name' />
                        <textarea ref={input => formFields.recipe_description = input} placeholder= "Enter Recipe Description" />
                        <textarea ref={input => formFields.recipe_direction = input} placeholder= "Enter Recipe Directions" />
                        <input type='text' ref={input => formFields.img = input} placeholder= "Enter Recipe Image URL" />
                        <button>Submit</button>
                    </form>
                </div>
            </div>
              
        )
    }
/*
    let formFields = {}

    return(
        <div className="form-bg-overlay">
            <div className="form-bg">
                <form classsName="form"> 
                    onSubmit={ (e) => {
                    e.preventDefault();
                    props.handleFormSubmit(
                        formFields.recipe_name.value,
                        formFields.recipe_description.value,
                        formFields.recipe_direction.value,
                        formFields.img.value
                    );
                    e.target.reset(); }
                    }>
                        <i className="zmdi zmdi-class zmdi-hc-2x pull-right"
                            OnClick = {this.props.toggleHidden} />
                            <h2 className="form_title">Add Recipe</h2>
                            <input ref={input => formFields.recipe_name = input} placeholder= 'Enter Recipe Name' />
                            <input ref={input => formFields.recipe_description = input} placeholder= "Enter Recipe Description" />
                            <input ref={input => formFields.recipe_direction = input} placeholder= "Enter Recipe Directions" />
                            <input ref={input => formFields.img = input} placeholder= "Enter Recipe Image URL" />
                            <button>Submit</button>
                </form>
            </div>
        </div>
    )

    */
}

export default AddRecipe;