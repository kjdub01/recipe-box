import React from 'react'

class BoxMain extends React.Component {

    render () {
        console.log(this.props)
        //const ingredients = this.props.ingredients,
        //listIngredients = ingredients.map((ingredient, index) => {
            //return(
             //   <span key={index}>{ (index ? ', ' : '') + ingredient.ingredient_name}</span> 
           // )
        //});
        return(
            <main className='box_main'>
                <div className='row'>
                    <div className='column six'>
                        <h3 className='box_subheading'>Ingredients</h3>
                        <p>
                            ingredients
                        </p> 
                    </div>
                    <div className='column six'>
                        <img src="https://cocoaandlavender.com/wp-content/uploads/2019/04/DSABioPicBWsmall.jpg" className='box_img' />
                    </div>
                </div>
                <h3 className=''>Directions</h3>
                <p className='box_directions'>directions</p>
                <h3 className=''>My Thoughts</h3>
                <p className='box_directions'>description</p>
        
            </main>
        )
    }
}

export default BoxMain;

//{listIngredients}
//listIngredients = ingredients.map((ingredient, index) => {
            //return(
                //<span key={index}>{ (index ? ', ' : '') + ingredient.ingredient_name}</span> 
           // )
        //});