import React from 'react';

import NavigationButton from './../../components/NavigationButton.js'
import BackButton from './../../components/BackButton.js'

import Polaroid from './../../components/Polaroid.js'

import './Design.css'

import onlo from './../../assets/cover-onlo.png'
import afx from './../../assets/afx-2020-large.png'

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
              <a href="/onlo">
                  <Polaroid
                      name="OnLo"
                      image=<img className="image" src={onlo} />
                      position="UI/UX Designer"
                      link="/onlo"
                  />
              </a>
              <a href="/dance">
                  <Polaroid
                      name="AFX Dance"
                      image=<img className="image" src={afx} />
                      position="Chair of Design"
                      link="/dance"
                  />
              </a>
          </div>
      </div>


  );
}

export default Design;
