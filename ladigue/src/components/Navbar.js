import React from 'react';
import { Link } from 'react-router-dom'; 
import './Navbar.css'

function Navbar() {
    return (
        <div className='Nav'>
            <nav className="navbar">
            <div className="navbar-container">
           
            <Link to='/' className='logo'>Travel Go</Link>
            <div>
                <Link to='/'>Discover</Link>
                <Link>Plan a trip</Link>
                <Link>All tours</Link>
                <Link>Hotels</Link>
                <Link>Our Blog</Link>
            </div>

            <div>
            Mike Halleway
            </div>
          
            </div>
            </nav>
        </div>
    )
}
function Herocontent() {

}
export default Navbar;
