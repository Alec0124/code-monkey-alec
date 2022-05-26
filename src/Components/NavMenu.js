import React from 'react';
import {Link, Redirect} from 'react-router-dom';

const NavMenu = () => {
    //

    return (
        <div id='navMenu'>
            <Link to="/home">
                Home
            </Link>
            <Link to="/about">
                About
            </Link>
            <Link to="/portfolio">
                Portfolio
            </Link>
        </div>
    )
};

export default NavMenu;