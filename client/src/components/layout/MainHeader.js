import React from 'react'
import { Link } from 'react-router-dom'
import NavbarLinks from './navbarLinks'

const MainHeader = () => {
    return (
        <nav className='header'>
            <div className="container flex-container">
                <Link style={{ textDecoration: 'none', color: 'white' }} className="brand-logo" to='/'><h1>Recipe Box</h1></Link>
                <NavbarLinks />
            </div>
        </nav>
    )
}

export default MainHeader; 