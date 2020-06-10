import React from 'react'
import Toggle from './ToggleRPC.js'

class Box extends React.Component {

    render() {
        return(
            <Toogle>
                {({ on, toogle }) => ( 
                <div className='box-bg-overlay'>
                    <div className='box'>
                        {on && <BoxHeader recipeName={this.props.recipeName} toggle={this.props.toggle} /> }
                        <BoxMain 
                            ingredients={this.props.ingredients}
                            recipeDirections={this.props.recipe_directions}
                            recipeDescription={this.props.recipe_descrption}
                            img={this.props.img}
                        />
                        <BoxFooter 
                            //delete={this.props.delete}
                            //toggleEdit={this.props.edit}
                        />
                    </div>  
                </div>
                )}
            </ Toogle>
        )
    }
}