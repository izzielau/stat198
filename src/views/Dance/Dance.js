import React from 'react';

import NavigationButton from './../../components/NavigationButton.js'

import './Dance.css'

import style from './../../assets/design-style-afx.png'
import workshop from './../../assets/afx-demos/1.jpg'
import amongus from './../../assets/afx-demos/2.png'
import tech from './../../assets/afx-demos/3.png'
import workshopad from './../../assets/afx-demos/4.png'
import apparel1 from './../../assets/afx-demos/5.png'
import apparel2 from './../../assets/afx-demos/6.png'
import apparel3 from './../../assets/afx-demos/7.png'
import apparel4 from './../../assets/afx-demos/8.png'

function Dance() {
  return (
      <div className="afx">
          <div className="title">
              AFX
          </div>
          <div className="subtitle">
              As the lead designer of AFX Dance, I led the creation of the summer and fall branding guide
              for the organization and used the guide to implement designs for the marketing team throughout the semester.
          </div>
          <div className="branding">
              Branding
          </div>
          <img className="image" src={style} />
          <div className="examples">
              Examples
          </div>
          <div className="subtitle">
              With this branding guide, I designed the following designs, apparel, and stickers for the organization.
              The materials have been viewed thousands of times on AFX's expansive reach of social media channels, including
              Instagram, YouTube, and Facebook.
          </div>
          <div className="carousel">
              <img className="image" src={workshop} />
              <img className="image" src={amongus} />
          </div>
          <img className="image" src={tech} />
          <img className="image" src={workshopad} />
          <div className="carousel">
              <img className="image" src={apparel1} />
              <img className="image" src={apparel2} />
          </div>
          <div className="carousel">
              <img className="image" src={apparel3} />
              <img className="image" src={apparel4} />
          </div>
      </div>
  );
}

export default Dance;
