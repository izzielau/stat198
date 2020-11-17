import React from 'react';

import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import { DefaultButton } from 'office-ui-fabric-react'

import { MenuItem } from '@material-ui/core/';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const ColorButton = withStyles(() => ({
    root: {
        font: "Avenir",
        color: "#FFFFFF",
        backgroundColor: "transparent",
        borderRadius: '40px',
        width: '100px',
        height: '50px',
        '&:hover': {
            color: "#606368",
        },
    },
}))(Button);

class BackButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            link: props.link,
            text: props.text,
        };
    }

    render() {
        return(
            <ColorButton component={Link} to={this.state.link}>
                {this.state.text}
            </ColorButton>
        );
    }
}

export default BackButton;
