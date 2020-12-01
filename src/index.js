import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import { DefaultButton } from 'office-ui-fabric-react'

import './index.css';
import 'typeface-roboto'

import Header from './Header.js'
import Landing from './views/Landing/Landing';
import Design from './views/Design/Design'
import Software from './views/Software/Software'
import Sigmas from './views/Sigmas/Sigmas'
import Onlo from './views/Onlo/Onlo'
import Dance from './views/Dance/Dance'
import TigerTalk from './views/TigerTalk/TigerTalk'

import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
        <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route path="/design" component={Design} />
            <Route path="/sigmas" component={Sigmas} />
            <Route path="/onlo" component={Onlo} />
            <Route path="/dance" component={Dance} />
            <Route path="/tigertalk" component={TigerTalk} />
            <Route path="/software" component={Software} />
        </div>
    </Router>
)
ReactDOM.render(routing, document.getElementById('root'))

// ReactDOM.render(<Landing />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
