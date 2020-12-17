import React from 'react';
import { Link } from 'react-router-dom';

import './ExternalButton.css'

const ExternalButton = ({ text, link }) => {
    return(
        <div>
            <a href={link} target="_blank" style={{textDecoration: "none"}}>
                <div className="external-button">
                    {text}
                </div>
            </a>
        </div>
    );
}

export default ExternalButton;
