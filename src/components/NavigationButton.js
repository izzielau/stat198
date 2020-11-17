import React from 'react';

import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import { DefaultButton } from 'office-ui-fabric-react'

import { MenuItem } from '@material-ui/core/';
import Button from '@material-ui/core/Button';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';

const ColorButton = withStyles(() => ({
    root: {
        font: "Open Sans",
        fontWeight: "bold",
        color: "#E1E4EE",
        // 92ABEA 4F6DB9
        backgroundColor: "none",
        borderRadius: '0px',
        width: '125px',
        height: '7.5vh',
        '&:hover': {
            color: "#3E3E3E",
            backgroundColor: "#E1E4EE",
        },
    },
}))(Button);

class NavigationButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            link: props.link,
            text: props.text,
        };
    }

    render() {
        return(
            <ColorButton className="button" component={Link} to={this.state.link}>
                {this.state.text}
            </ColorButton>
        );
    }
}

export default NavigationButton;
