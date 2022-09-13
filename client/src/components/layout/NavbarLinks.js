import React from 'react'
import { NavLink } from 'react-router-dom'

const NavbarLinks = () => {
    return (
        <button className="action pull-right btn-primary">
            <NavLink to='/add-recipe' style={{ textDecoration: 'none', fontWeight: 'bold' }}>Add Recipe</NavLink>
        </button>
    )
}

export default NavbarLinks;