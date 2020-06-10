import React from 'react'

const BoxFooter = (props) => {

    return (
        <footer className='box_footer'>
            <button className='btn-warning' onClick={this.props.delete}>
                <i classname='zmdi zmdi-delete zmdi-hc-lg btn-icon'/> Delete
            </button>
            <button onClick={this.props.toggleEdit}>
                <i className='zmdi zmdi-edit zmdi-hc-lg btn-icon' />Edit
            </button>
        </footer>
    )
}

export default BoxFooter;