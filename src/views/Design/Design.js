import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import BackButton from './../../components/BackButton.js'

import Polaroid from './../../components/Polaroid.js'
import Header from './../../components/Header.js'

import './Design.css'

import onlo from './../../assets/cover-onlo.png'
import afx from './../../assets/afx-cover.png'
import sigmas from './../../assets/sigmas-cover.png'
import tigertalk from './../../assets/tigertalk-cover.png'

function Design() {
  return (
      <div class="design">
          <div class="glass">
              <Header />
              <div class="container">
                  <div className="title">
                      Design
                  </div>
                  <div className="subtitle">
                      Here is a selection of UI/UX projects and graphic designs that I’ve worked on.
                      My main tools of choice are Figma and Adobe Illustrator.
                  </div>
                  <div className="carousel">
                      <Polaroid
                          name="TigerTalk"
                          image=<img className="image" src={tigertalk} />
                          position="UI/UX Intern"
                          link="/tigertalk"
                      />
                      <Polaroid
                          name="Sigma Psi Zeta"
                          image=<img className="image" src={sigmas} />
                          position="Chair of Public Relations"
                          link="/sigmas"
                      />
                      <Polaroid
                          name="OnLo"
                          image=<img className="image" src={onlo} />
                          position="UI/UX Designer"
                          link="/onlo"
                      />
                      <Polaroid
                          name="AFX Dance"
                          image=<img className="image" src={afx} />
                          position="Chair of Design"
                          link="/dance"
                      />
                  </div>
              </div>
          </div>
      </div>
  );
}

export default Design;
