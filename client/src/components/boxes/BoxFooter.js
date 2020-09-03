import React from 'react'

const BoxFooter = (props) => {

    return (
        <footer className='box_footer'>
            <button className='btn-warning'>
                <i className='zmdi zmdi-delete zmdi-hc-lg btn-icon'/> Delete
            </button>
            <button className="btn-primary">
                <i className='zmdi zmdi-edit zmdi-hc-lg btn-icon' />Edit
            </button>
        </footer>
    )
}

export default BoxFooter;