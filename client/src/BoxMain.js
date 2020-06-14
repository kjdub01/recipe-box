import React from 'react'

class BoxMain extends React.Component {

    render () {
        const ingredients = this.props.ingredients,
        listIngredients = ingredients.map((ingredient) => {
            return(
                <ul className='box_ingredients'>
                    <li>{ingredient.ingredient_name}</li>
                </ul>
            )
        })

        return(
            <main className='box_main'>
                <div className='row'>
                    <div className='column six'>
                        <h3 className='box_subheading'>Ingredients</h3>
                        {listIngredients}   
                    </div>
                    <div className='column six'>
                        <img src={this.props.recipeImg} className='box_img' />
                    </div>
                    <h3>Directions</h3>
                    <p className='box_directions'>{this.props.recipeDirections}</p>
                </div>
            </main>
        )
    }
}

export default BoxMain;

//