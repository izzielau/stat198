import React from 'react';

import './Button.css'

const Button = ({ text, link }) => {
    return(
        <div>
            <a rel="noopener noreferrer" href={link} style={{ textDecoration: 'none' }}>
                <div className="button">
                    {text}
                </div>
            </a>
        </div>
    );
}

export default Button;
