import React from 'react';
import { Link } from 'react-router-dom';

import './LandingButton.css'

const LandingButton = ({ text, link }) => {
    return(
        <div>
            <Link to={link} style={{ textDecoration: 'none' }}>
                <div class="landing-button" >
                    <p class="highlighted-text"> {text}</p>
                </div>
            </Link>
        </div>
    );
}

export default LandingButton;
