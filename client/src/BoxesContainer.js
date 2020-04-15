import React from 'react'
import MainHeader from './MainHeader'
import MainFooter from './MainFooter';

class BoxesContainer extends React.Component {

    render() {
        return(
            <React.Fragment>
                <MainHeader />
                <MainFooter />
            </React.Fragment>
        )
    }
}

export default BoxesContainer;