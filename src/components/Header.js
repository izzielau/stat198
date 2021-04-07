import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';
import CursiveButton from './CursiveButton.js'
import Button from './Button.js'

const Header = () => {
    return (
        <div className="header">
            <div class="left">
                <Button text="Home" link="/"/>
            </div>
            <div class="right">
                <Button text="About" link="/about"/>
                <Button text="Software" link="/software"/>
                <Button text="Design" link="/design"/>
            </div>
        </div>
    );
}

export default Header;
