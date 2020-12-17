import React from 'react';

import './CursiveButton.css'

const CursiveButton = ({ text, link }) => {
    return(
        <div>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Cedarville+Cursive&display=swap');
        </style>
            <a rel="noopener noreferrer" href={link} style={{ textDecoration: 'none' }}>
                <div className="cursive">
                    {text}
                </div>
            </a>
        </div>
    );
}

export default CursiveButton;
