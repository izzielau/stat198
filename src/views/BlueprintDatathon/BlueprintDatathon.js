import React from 'react';

import './BlueprintDatathon.css'

import Header from './../../components/Header.js'
import Button from './../../components/Button.js'
import ExternalButton from './../../components/ExternalButton.js'

function BlueprintDatathon() {
  return (
      <div className="bpdata">
          <div class="glass">
              {/*<Header />*/}
              <div className="backbutton">
                  <Button link="/software" text="Back"/>
              </div>
              <div class="container">
                  <div className="title">
                      Blueprint Datathon
                  </div>
                  <div className="subtitle">
                      With a few friends from Big Data at Berkeley, a data science organization at Berkeley that
                      I've had the pleasure of being a part of, we analyzed three datasets from Enya.AI, the
                      U.S. Census, and other research organizations that have documented the effects of COVID-19
                      on the population of the United States.
                  </div>
                  <div className="subtitle">
                      Using data analysis and machine learning, we analyzed some of the factors that have contributed
                      to disparities in COVID-19 outcomes between different segments of the American population.
                  </div>
                  <div class="spacer" />
                  <ExternalButton link="https://drive.google.com/file/d/1uH8MxiQzx4cSqYPypHoQcv9EyBeqQtyG/view?usp=sharing" text="Research Paper" />
              </div>
          </div>
      </div>
  );
}

export default BlueprintDatathon;
