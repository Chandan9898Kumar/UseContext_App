import React from 'react'
import { NavLink } from 'react-router-dom';
import './styles.css'
import { useContext } from 'react';
import {UserDetails} from '../Context'
const Header = () => {
    const {cart}=useContext(UserDetails)
    return (
        <div>
            <span className='header'>React Context API App</span>
            <ul className='nav'>
                <li>
                    <NavLink to='/' style={{color:'white'}}>Home Page</NavLink>
                </li>
                <br />
                <li>
                    <NavLink to='/cart' style={{color:'white',wordSpacing:'2px'}}>Cartpage {cart.length}</NavLink>
                </li>
            </ul>


        </div>
    )
}

export default Header;
