import React from 'react';
import { Link } from 'react-router-dom';

import './Button.css'

const Button = ({ text, link }) => {
    return(
        <div>
            <Link to={link} style={{ textDecoration: 'none' }}>
                <div className="button" >
                    {text}
                </div>
            </Link>
        </div>
    );
}

export default Button;
