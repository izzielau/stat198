import React from 'react';

import './Onlo.css'

import Header from './../../components/Header.js'
import Button from './../../components/Button.js'

function Onlo() {
  return (
      <div className="onlo">
          <div class="glass">
              {/*<Header />*/}
              <div className="backbutton">
                  <Button link="/design" text="Back"/>
              </div>
              <div class="container">
                  <div className="title">
                      OnLo
                  </div>
                  <div className="subtitle">
                      I was the lead designer of OnLo, a mobile application startup aimed at
                      making the transfer of knowledge accessible, instant, and widespread.
                  </div>
                  <div className="subtitle">
                      After the application is published, I will publish a more in-depth case study
                      of my design process and an analysis of the prototype mockup.
                  </div>
              </div>
          </div>
      </div>
  );
}

export default Onlo;
