import React from 'react'

const AddRecipe = (props) => {

        let formFields = {}
        return(
            
            <div className="form-bg-overlay">
                <div className="form-bg">
                    <form className="form" onSubmit={ (e) => {
                        e.preventDefault();
                        props.handleFormSubmit(
                            formFields.recipe_name.value,
                            formFields.recipe_description.value,
                            formFields.recipe_direction.value,
                            formFields.img.value,
                            formFields.ingredients.value
                        );
                        e.target.reset();}
                    }>
                        <i className="zmdi zmdi-close zmdi-hc-2x pull-right"  onClick={props.toggle}/> 
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

export default AddRecipe;