import React from 'react';

import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import { DefaultButton } from 'office-ui-fabric-react'

class GithubButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.github.com/izzielau/"
            >
              <img
                style={{marginRight: '10px'}}
                src={require('./../assets/github.png')}
                alt="github link"
              />
            </a>
        );
    }
}

export default GithubButton;
