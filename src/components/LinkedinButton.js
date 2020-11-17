import React from 'react';

import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import { DefaultButton } from 'office-ui-fabric-react'

class LinkedinButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/izzielau/"
            >
              <img
                style={{marginRight: '10px'}}
                src={require('./../assets/linkedin.png')}
                alt="linkedin link"
              />
            </a>
        );
    }
}

export default LinkedinButton;
