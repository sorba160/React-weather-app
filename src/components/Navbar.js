import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
    return <div className='Navbar'>

        <ul className='Navitem'>
            <li><Link to="/home" className='navtype'>HOME</Link></li>
            <li><Link to="/about" className='navtype'>ABOUT</Link></li>
            <li><Link to="/contact" className='navtype'>CONTACT</Link></li>
            <li><Link to="/service" className='navtype'>SERVICE</Link></li>

        </ul>
    </div>;
};

export default Navbar;



