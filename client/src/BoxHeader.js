import React from 'react'

class BoxHeader extends React.Component {

    render () {
        return (
            <header className='box_header'>
                <h2 className='box_title'> 
                    {this.props.recipeName}
                </h2>
                <i className='zmdi zmdi-close zmdi-hc-2x pull-right'
                onClick={this.props.toggle}
                /> 
            </header>
        )
    }
}

export default BoxHeader;