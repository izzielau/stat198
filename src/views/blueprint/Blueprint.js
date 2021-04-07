import React from 'react';

import './Blueprint.css';

import Button from '../../components/Button';
import ExternalButton from '../../components/ExternalButton';

function Blueprint() {
    return (
    <div class="blueprint">
        <div className="backbutton">
            <Button link="/software" text="Back"/>
        </div>
        <div class="text-container">
            <text class="big-text">blueprint</text>
            <text class="small-text"> 
            With a few friends from Big Data at Berkeley, a data science organization at Berkeley, 
            we analyzed three datasets from Enya.AI, the U.S. Census, and other research 
            organizations that have documented the effects of COVID-19
            on the population of the United States.
            </text>
            <text class="small-text">
            Using data analysis and machine learning, we analyzed some of the factors that have 
            contributed to disparities in COVID-19 outcomes between different segments of the 
            American population.
            </text>
            <div class="spacer"> </div>
            <ExternalButton text="Research Paper" link="https://drive.google.com/file/d/1uH8MxiQzx4cSqYPypHoQcv9EyBeqQtyG/view?usp=sharing"/>
        </div>
        
    </div>
  );
}

export default Blueprint;
