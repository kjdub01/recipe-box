import React from 'react'
import  './BoxesContainer.js'
import BoxesContainer from './BoxesContainer.js';

class Layout extends React.Component {

    constructor() {
        super();
        this.state ={
            data: []
        };
    }

    render() {
        return(
            <BoxesContainer />
        );
    }
}

export default Layout;