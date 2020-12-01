import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import NavigationButton from './../../components/NavigationButton.js'
import BackButton from './../../components/BackButton.js'

import Polaroid from './../../components/Polaroid.js'

import './Design.css'

import onlo from './../../assets/cover-onlo.png'
import afx from './../../assets/afx-2020-large.png'
import sigmas from './../../assets/sigmas-cover.png'

function Design() {
  return (
      <div className="design">
          <div className="title">
              Design
          </div>
          <div className="subtitle">
              Here is a selection of UI/UX projects and graphic designs that I’ve worked on.
              My main tools of choice are Figma and Adobe Illustrator.
          </div>
          <div className="carousel">
              <Link to="/onlo">
                  <Polaroid
                      name="OnLo"
                      image=<img className="image" src={onlo} />
                      position="UI/UX Designer"
                      link="/onlo"
                  />
              </Link>
              <Link to="/dance">
                  <Polaroid
                      name="AFX Dance"
                      image=<img className="image" src={afx} />
                      position="Chair of Design"
                      link="/dance"
                  />
              </Link>
              <Link to="/sigmas">
                  <Polaroid
                      name="Sigma Psi Zeta"
                      image=<img className="image" src={sigmas} />
                      position="Chair of Public Relations"
                      link="/sigmas"
                  />
              </Link>
          </div>
      </div>
  );
}

export default Design;
