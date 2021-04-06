import React from 'react'

class TileFooter extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            hover: false, 
            click: false,}
        this.toggleHover = this.toggleHover.bind(this)
        this.toggleClick = this.toggleClick.bind(this)
    }

    //goToRecipe() {
        //this.props.history.push(`/recipes/${this.props.recipeId}`)

    //}

    
    toggleHover() {
        this.setState({hover: !this.state.hover})
    }

    toggleClick() {
        this.setState({click: !this.state.click})
    }

    render() {
        //const linkPath = `/recipes/${this.props.recipeId}`
        let bookmarkStyle;
        if(this.state.hover | this.state.click) {
            bookmarkStyle= "zmdi zmdi-bookmark zmdi-hc-2x btn-bookmark"
        } else {
            bookmarkStyle= "zmdi zmdi-bookmark-outline zmdi-hc-2x btn-bookmark"
        }

        return (
            <footer className="tile_footer">
                <i className={bookmarkStyle} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} onClick={this.toggleClick} />
            </footer>
        );
    }
}



export default TileFooter

/*



<Toggle>
            {({ on, toggle }) => (
                <footer className="tile_footer"> 
                {on && <Box toggle={toggle}
                    recipeName={this.props.recipeName}
                    recipeImg={this.props.recipeImg} 
                    recipeDirections={this.props.recipeDirections} 
                    recipeDescription={this.props.recipeDescription}
                    ingredients={this.props.ingredients}
                />}
                

                <i className={bookmarkStyle} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} onClick={this.toggleClick}/>
                </footer>
            )}
        </Toggle> 


<Box 
                    recipeName={this.props.recipeName}
                    recipeImg={this.props.recipeImg}
                    recipeDescription={this.props.recipeDescription}
                    recipeDirections={this.props.recipeDirections}
                    ingredients={this.props.ingredients}
                    recipeId={this.props.recipeId} />

handleClick = () => {
        let recipeId = this.props.recipeId
        this.props.history.push(`/recipes/${recipeId}`)
        <Box />
    }

<footer className="tile_footer"> 
                <button className="btn-primary" onClick={this.props.handleClick}>
                    <i className="zmdi zmdi-open-in-new zmdi-hc-lg btn-icon" /> Open Recipe
                </button>

                <i className={bookmarkStyle} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}/>
            </footer>
             
            <footer className="tile_footer"> 
            <button className="btn-primary" onClick={this.handleClick(this.props.recipeId, this.props.recipeName)}>
                <i className="zmdi zmdi-open-in-new zmdi-hc-lg btn-icon" /> Open Recipe 
            </button>

            <i className={bookmarkStyle} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} onClick={this.toggleClick}/>
        </footer>
            
            
            
            
            
            */

        