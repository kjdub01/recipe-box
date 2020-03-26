import React from 'react'

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