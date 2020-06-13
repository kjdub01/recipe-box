import React from 'react'

class BoxMain extends React.Component {

    render () {
        return(
            <main className='box_main'>
                <div className='row'>
                    <div className='column six'>
                        <h3 className='box_subheading'>Ingredients</h3>
                        <p className='box_ingrdients'>{this.props.ingredients}</p>
                    </div>
                    <div className='column six'>
                        <img scr={this.props.recipeImg} className='box_img' />
                    </div>
                    <h3>Directions</h3>
                    <p className='box_directions'>{this.props.recipeDirections}</p>
                </div>
            </main>
        )
    }
}

export default BoxMain;