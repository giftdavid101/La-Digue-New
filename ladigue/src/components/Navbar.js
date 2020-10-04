import React from 'react';
import { Link } from 'react-router-dom'; 
import './Navbar.css'

function Navbar() {
    return (
        <div className='Nav'>
            <nav className="navbar">
            <div className="navbar-container">
           
            <Link to='/' className='logo'>Travel Go</Link>
            
            </div>
            </nav>
        </div>
    )
}

export default Navbar;
