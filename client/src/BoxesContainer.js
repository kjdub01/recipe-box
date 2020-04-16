import React from 'react'
import styles from './App.css'
import MainHeader from './MainHeader'
import MainFooter from './MainFooter';

class BoxesContainer extends React.Component {

    render() {
        return(
            <div>
                <MainHeader />
                <MainFooter />
            </div>
        )
    }
}

export default BoxesContainer;