import React from 'react'

class BoxMain extends React.Component {

    render () {
        const ingredients = this.props.ingredients,
        listIngredients = ingredients.map((ingredient, index) => {
            return(
                <span key={index}>{ (index ? ', ' : '') + ingredient.ingredient_name}</span> 
            )
        });

        return(
            <main className='box_main'>
                <div className='row'>
                    <div className='column six'>
                        <h3 className='box_subheading'>Ingredients</h3>
                        <p>
                            {listIngredients}
                        </p> 
                    </div>
                    <div className='column six'>
                        <img src={this.props.recipeImg} className='box_img' />
                    </div>
                </div>
                <h3 className=''>Directions</h3>
                <p className='box_directions'>{this.props.recipeDirections}</p>
                <h3 className=''>My Thoughts</h3>
                <p className='box_directions'>{this.props.recipeDescription}</p>
                
            </main>
        )
    }
}

export default BoxMain;

//