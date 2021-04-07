import React from 'react';

import './Software.css';

import btcover from "./../../assets/bt-cover.png";
import sccover from "./../../assets/sproul@2x.png";
import bdabcover from "./../../assets/bdab-cover.png";
import spotifycover from "./../../assets/spotify@2x.png";
import bpdatacover from "./../../assets/datathon@2x.png";

import RectanglePolaroid from './../../components/RectanglePolaroid'
import RectangleExternalPolaroid from './../../components/RectangleExternalPolaroid'

function Software() {
    var blue = <img className="image" src={blue}></img>
    var sproul = <img className="image" src={sccover}></img>
    var spotify = <img className="image" src={spotifycover}></img>
    var datathon = <img className="image" src={bpdatacover}></img>
  
  return (
    <div class="software">
        <div class="text-container">
            <text class="big-text">software</text>
            <text class="small-text"></text>
        </div>
        <div class="links-container">
            <div class="row">
                <RectangleExternalPolaroid title="frontend engineer" subtitle="volunteer for sproul.club" image={sproul} link="https://sproul.club"> </RectangleExternalPolaroid>
                <RectanglePolaroid title="machine learning self-project" subtitle="built using spotify api data" image={spotify} link="/spotify"> </RectanglePolaroid>
                <RectanglePolaroid title="blueprint datathon [1st place]" subtitle="performing covid-19 research" image={datathon} link="/datathon"> </RectanglePolaroid>
            </div>
        </div>
    </div>
  );
}

export default Software;
