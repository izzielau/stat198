import React from 'react';

import NavigationButton from './../../components/NavigationButton.js'
import BackButton from './../../components/BackButton.js'

import './Sigmas.css';

import style from "./../../assets/design-guide-sigmas.png"
import dvam from "./../../assets/sigmas-demos/dvam.png"
import election from "./../../assets/sigmas-demos/election.png"
import minorboard from "./../../assets/sigmas-demos/minorboard.png"
import donation1 from "./../../assets/sigmas-demos/donation1.png"
import donation2 from "./../../assets/sigmas-demos/donation2.png"

function Sigmas() {
  return (
      <div className="sigmas">
          <div className="title">
              Sigma Psi Zeta
          </div>
          <div className="subtitle">
              As the public relations chair of Sigma Psi Zeta, I lead the creation and development of design materials for
              marketing, philanthropy, outreach, and other aspects of the organization. I started the use of a branding guide
              to provide a guideline for the marketing team to create designs with.
          </div>
          <div className="branding">
              Branding
          </div>
          <img className="image" src={style} />
          <div className="examples">
              Examples
          </div>
          <div className="subtitle">
              With this branding guide, I designed multiple designs for the organization. Here are some examples from my work
              (certain names, photos, and details have been redacted to respect these individuals' privacy):
          </div>
          <div className="carousel">
              <img className="rectangle" src={minorboard} />
          </div>
          <div className="carousel">
              <img className="image" src={donation1} />
              <img className="image" src={donation2} />
          </div>
          <div className="carousel">
              <img className="image" src={dvam} />
              <img className="image" src={election} />
          </div>
      </div>
  );
}

export default Sigmas;
