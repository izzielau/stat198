import React from 'react';

import './Design.css';

import tigertalkcover from './../../assets/tigertalk@2x.png';
import sproulcover from './../../assets/sproul@2x.png';
import onlocover from './../../assets/onlo@2x.png';
import blue from './../../assets/blue.png';

import RectanglePolaroid from './../../components/RectanglePolaroid';
import RectangleExternalPolaroid from '../../components/RectangleExternalPolaroid';

function Design() {
    var tigertalk = <img class="image" src={tigertalkcover}></img>;
    var sproul = <img class="image" src={sproulcover}></img>;
    var onlo = <img class="image" src={onlocover}></img>;

    return (
    <div class="design">
        <div class="text-container">
            <text class="big-text">design</text>
            <text class="small-text"></text>
        </div>
        <div class="links-container">
            <div class="row">
                <RectanglePolaroid title="ui/ux intern" subtitle="tigertalk" link="/tigertalk" image={tigertalk}> </RectanglePolaroid>
                <RectanglePolaroid title="product designer" subtitle="sproul.club" link="/sproul" image={sproul}> </RectanglePolaroid>
                <RectanglePolaroid title="ui/ux designer" subtitle="onlo" link="/onlo" image={onlo}> </RectanglePolaroid>
            </div>
            {/* 
            <div class="row">
                <RectanglePolaroid title="marketing director" subtitle="sigma psi zeta" link="/sigmas"> </RectanglePolaroid>
                <RectanglePolaroid title="chair of design" subtitle="afx dance" link="/dance"> </RectanglePolaroid>
                <RectanglePolaroid title="marketing director" subtitle="web development at berkeley" link="/wdb"> </RectanglePolaroid>
            </div>
            */}
        </div>
    </div>
  );
}

export default Design;
