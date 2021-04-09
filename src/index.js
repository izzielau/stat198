import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import { DefaultButton } from 'office-ui-fabric-react'

import './index.css';
import 'typeface-roboto'
import 'typeface-lato'

import Header from './components/Header';
import Landing from './views/landing/Landing';
import About from './views/about/About';
import Software from './views/software/Software'
import Design from './views/design/Design'
import Sproul from './views/sproul/Sproul'
import Onlo from './views/onlo/Onlo'
import Blueprint from './views/blueprint/Blueprint';
import Spotify from './views/spotify/Spotify'

import Resume from './views/Resume/Resume'
import Sigmas from './views/Sigmas/Sigmas'
import Dance from './views/Dance/Dance'
import TigerTalk from './views/tigertalk/TigerTalk'

import * as serviceWorker from './serviceWorker';
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
    gtmId: 'G-29VY8EL103'
}
TagManager.initialize(tagManagerArgs)

const routing = (
    <div>
        <Router>
            <Header />
            <div class="background">
                <Route exact path="/" component={Landing} />
                <Route exact path="/about" component={About} />
                <Route path="/software" component={Software} />
                <Route path="/design" component={Design} />
                <Route path="/sproul" component={Sproul} />
                <Route path="/tigertalk" component={TigerTalk} />
                <Route path="/onlo" component={Onlo} />
                <Route path="/datathon" component={Blueprint} />

                <Route path="/spotify" component={Spotify} />
                <Route path="/resume" component={Resume} />
                <Route path="/sigmas" component={Sigmas} />
                <Route path="/dance" component={Dance} />
            </div>
        </Router>
    </div>
)
ReactDOM.render(routing, document.getElementById('root'))

// ReactDOM.render(<Landing />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
