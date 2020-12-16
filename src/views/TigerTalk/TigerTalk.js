import React from 'react';

import './TigerTalk.css'

import Header from './../../components/Header.js'
import Button from './../../components/Button.js'

function TigerTalk() {
  return (
      <div className="tigertalk">
          <div class="glass">
              <div className="backbutton">
                  <Button link="/design" text="Back"/>
              </div>
              {/*<Header />*/}
              <div class="container">
                  <div className="title">
                      TigerTalk
                  </div>
                  <div className="subtitle">
                      I am a UI/UX design intern for TigerTalk, a startup that partners
                      with speech coaches to provide an intuitive platform for
                      analyzing and giving feedback on their students' performances.
                  </div>
                  <div className="subtitle">
                      After my work is finished, I will publish a more in-depth case study
                      of my design process and an analysis of the prototypes I built.
                  </div>
              </div>
          </div>
      </div>
  );
}

export default TigerTalk;
