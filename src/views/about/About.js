import React from 'react';

import './About.css';
import RectanglePolaroid from './../../components/RectanglePolaroid';
import tigertalkcover from './../../assets/tigertalk@2x.png';
import sproulcover from './../../assets/sproul@2x.png';
import akroncover from './../../assets/akron@2x.png';
    
function About() {
    var tigertalk = <img class="image" src={tigertalkcover}></img>;
    var sproul = <img class="image" src={sproulcover}></img>;
    var akron = <img class="image" src={akroncover}></img>;

    return (
        <div class="about">
            <div class="text-container">
                <text class="big-text"> hey there! </text>
                <text class="small-text"> 
                I’m Izzie Lau and I’m a junior at UC Berkeley. I’m interested in the intersection
                of <b style={{color: "#2898FF"}}>human-computer interaction</b> with real-world
                applications of CS and data science. I’ve previously worked on web development, 
                mobile/extended reality applications, and machine learning projects and am always
                looking for ways to expand my knowledge and help my community. 
                </text>
                <text class="small-text">
                At Berkeley, I'm majoring in <b style={{color: "#2898FF"}}>Computer Science and 
                Cognitive Science</b>, minoring in <b style={{color: "#2898FF"}}>Data Science and
                IEOR</b>, and am also pursuing a certificate in <b style={{color: "#2898FF"}}>
                Entrepreneurship & Technology!</b> As you can tell-- I have a wide range of 
                interests in the applications of CS and am sure to translate my hands-on, 
                learn-all approach to the workplace. :) 
                </text>
                <text class="medium-text">
                    <b> notable courses (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧: </b>
                </text>
                <text class="list-text">
                - <b>(lower-division cs courses) </b> structure & interpretation of computer programs, 
                    data structures, discrete math & probability, linear algebra 
                </text>
                <text class="list-text">
                - <b>(data 100) </b> principles & techniques of data science 
                </text>
                <text class="list-text">
                - <b>(cs 170) </b> efficient algorithms & intractable problems
                </text>
                <text class="list-text">
                - <b>(cs 186) </b> database systems
                </text>
                <text class="list-text">
                - <b>(cs 188) </b> artificial intelligence
                </text>
                <text class="list-text">
                - <b>(cs 189) </b> machine learning
                </text>
                <text class="list-text">
                - <b>(ieor 165) </b> engineering statistics & quality control
                </text>
                <text class="list-text">
                - <b>(ieor 170) </b> industrial design
                </text>
                <text class="list-text">
                - <b>(ieor 172) </b> probability & risk analysis
                </text>
                <text class="list-text">
                - <b>(ieor 195) </b> entrepreneurship and innovation
                </text>
            </div>
            <div class="button-container">
                <text class="big-text"> </text>
                <text class="medium-text">
                    <b> what i'm currently working on! (´｡• ᵕ •｡`) </b>
                </text>
                <div class="row">
                    <RectanglePolaroid title="ui/ux intern" subtitle="tigertalk" image={tigertalk} link="/tigertalk"/>
                    <RectanglePolaroid title="product manager" subtitle="develop for good" image={akron}/>
                </div>
                <div class="row">
                    <RectanglePolaroid title="product designer" subtitle="sproul.club" image={sproul}/>
                </div>
            </div>
        </div>
    );
}

export default About;
