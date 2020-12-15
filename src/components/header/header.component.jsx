import React from 'react';
import {Link} from 'react-router-dom';
import  logo  from '../../goatico.png'; 
import './header.styles.scss';
{ /*   <img src={logo} alt="Logo" />  */} 
const Header = () => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <div className='logo'>
	    </div>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/contact'>
                CONTACT
            </Link>
            <Link className='option' to='/signin'>
                SIGN IN
            </Link>
        </div>
    </div>
);

export default Header;
