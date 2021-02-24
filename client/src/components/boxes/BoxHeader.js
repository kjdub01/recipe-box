import React from 'react'
import { Link } from 'react-router-dom'

class BoxHeader extends React.Component {
      
    render () {
        return (
            
                <header className='box_header'>
                    <Link to="/">
                    <i className="zmdi zmdi-close zmdi-hc-2x pull-right" style={{color: "white"}}  />
                    </Link>
                    <h2 className='box_title'> 
                        Recipe Name{this.props.recipeName}
                    </h2>
                </header>
        )
    }
}

export default BoxHeader;

// handleClick = () => {
   // this.props.history.push('/')
//}