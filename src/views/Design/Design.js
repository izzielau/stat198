import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import NavigationButton from './../../components/NavigationButton.js'
import BackButton from './../../components/BackButton.js'

import Polaroid from './../../components/Polaroid.js'

import './Design.css'

import onlo from './../../assets/cover-onlo.png'
import afx from './../../assets/afx-cover.png'
import sigmas from './../../assets/sigmas-cover.png'
import tigertalk from './../../assets/tigertalk-cover.png'

function Design() {
  return (
      <div>
          <div className="design">
              <div className="title">
                  Design
              </div>
              <div className="subtitle">
                  Here is a selection of UI/UX projects and graphic designs that I’ve worked on.
                  My main tools of choice are Figma and Adobe Illustrator.
              </div>
              <div className="carousel">
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
                  <Polaroid
                      name="Sigma Psi Zeta"
                      image=<img className="image" src={sigmas} />
                      position="Chair of Public Relations"
                      link="/sigmas"
                  />
                  {/*
                  <Polaroid
                      name="TigerTalk"
                      image=<img className="image" src={tigertalk} />
                      position="UI/UX Design Intern"
                      link="/tigertalk"
                  />
                  */}
              </div>
          </div>
      </div>
  );
}

export default Design;
