import React from 'react'
import { NavLink } from 'react-router-dom';
import './styles.css'
const Header = () => {
    return (
        <div>
            <span className='header'>React Context API App</span>
            <ul className='nav'>
                <li>
                    <NavLink to='/'>Home Page</NavLink>
                </li>
                <br />
                <li>
                    <NavLink to='/cart'>Cart page</NavLink>
                </li>
            </ul>


        </div>
    )
}

export default Header;
