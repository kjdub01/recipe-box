import React from 'react'
import BoxHeader from './BoxHeader.js'
import BoxMain from './BoxMain.js'
import BoxFooter from './BoxFooter.js'


class Box extends React.Component {
    render(){    
        return(
            <div className='box-bg-overlay'>  
                <div className='box'> 
                    <BoxHeader 
                        recipeName = {this.props.recipeName}
                    /> 
                    <BoxMain 
                        ingredients={this.props.ingredients}
                        recipeDirections={this.props.recipeDirections}
                        recipeDescription={this.props.recipeDescription}
                        recipeImg={this.props.recipeImg}
                    />
                    <BoxFooter
                        //recipeId={this.recipe.id} 
                        //delete={this.props.delete}
                        //toggleEdit={this.props.edit}
                    />
                </div>
            </div>  
        )
    }
}


export default Box;
//recipeName={this.props.recipeName} toggle={this.props.toggle}

/*



ingredients={this.props.ingredients}
recipeDirections={this.props.recipeDirections}
recipeDescription={this.props.recipeDescription}
recipeImg={this.props.recipeImg}
 onClose() {
        console.log(this.props)
        this.props.hideModal();
    }

    render() {{
        return( 
            <Modal onClose={this.onClose}>
                <BoxHeader  recipeName ={this.props.recipeName}/>

                <BoxFooter
                    //recipeId={this.recipe.id} 
                    //delete={this.props.delete}
                    //toggleEdit={this.props.edit}
                /> 
            </Modal>  
        )
        }
    }


    <div className='box-bg-overlay' key={this.props.recipeId}>
                <div className='box'>   
                    <BoxHeader 
                        recipeName = {this.props.recipeName}
                        toggle = {this.props.toggle} /> 
                    <BoxMain 
                        ingredients={this.props.ingredients}
                        recipeDirections={this.props.recipeDirections}
                        recipeDescription={this.props.recipeDescription}
                        recipeImg={this.props.recipeImg}
                    />
                    <BoxFooter
                        //recipeId={this.recipe.id} 
                        //delete={this.props.delete}
                        //toggleEdit={this.props.edit}
                    />
                </div>  
            </div>  
           
 */
