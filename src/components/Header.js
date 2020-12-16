import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';
import TransparentButton from './TransparentButton.js'
import Button from './Button.js'

const Header = () => {
    return (
        <div className="header">
            <div class="left">
                <TransparentButton text="Izzie Lau" link="/"/>
            </div>
            <div class="right">
                <Button text="Resume" link="/resume"/>
                <Button text="Software" link="/software"/>
                <Button text="Design" link="/design"/>
            </div>
        </div>
    );
}

export default Header;
