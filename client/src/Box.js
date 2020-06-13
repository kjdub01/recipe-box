import React from 'react'
import Toggle from './ToggleRPC.js'
import BoxHeader from './BoxHeader.js'
import BoxMain from './BoxMain.js'
import BoxFooter from './BoxFooter.js'

class Box extends React.Component {

    render() {
        return( 
                <div className='box-bg-overlay'>
                    <div className='box'>
                        <BoxHeader recipeName={this.props.recipeName} toggle={this.props.toggle} /> 
                        <BoxMain 
                            //ingredients={this.props.ingredients}
                            recipeDirections={this.props.recipeDirections}
                            //recipeDescription={this.props.recipeDescrption}
                            recipeImg={this.props.recipeImg}
                        />
                        <BoxFooter 
                            //delete={this.props.delete}
                            //toggleEdit={this.props.edit}
                        />
                    </div>  
                </div>
        )
    }
}

export default Box;