import React from 'react';

import './About.css';
import RectanglePolaroid from './../../components/RectanglePolaroid';
import tigertalkcover from './../../assets/tigertalk@2x.png';
import sproulcover from './../../assets/sproul@2x.png';
import akroncover from './../../assets/akron@2x.png';
import ExternalButton from '../../components/ExternalButton';
    
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

                <ExternalButton text="LinkedIn" link="https://www.linkedin.com/in/izzielau/" />
                
                <div class="spacer"></div> 

                <text class="medium-text">
                    <b> me as a human: </b>
                </text>
                <text class="small-text">
                i'm super passionate about creating intentional and impactful software that's aesthetic to the eye! i never
                settle for being too bored, which is why i'll often be handling a couple of roles and responsibilities at once. 
                </text>
                <text class="small-text">
                <b>favorite pastime?</b> i like to relax to valorant / among us streams while monching on snacks and creating some art 
                or listening to music! ♡
                </text>
                <text class="small-text">
                <b>what do you listen to? </b> anything edm with a steady beat! the best jam to listen to while coding-- feels like
                an adventure movie!
                </text>

                <div class="spacer"></div> 
                
                <text class="medium-text">
                    <b> notable courses (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧: </b>
                </text>
                <text class="small-text">
                    <ul>
                        <li><b>(lower-division cs courses) </b> structure & interpretation of computer programs, 
                        data structures, discrete math & probability, linear algebra </li>
                        <li><b>(data 100) </b> principles & techniques of data science </li>
                        <li><b>(cs 170) </b> efficient algorithms & intractable problems</li>
                        <li><b>(cs 186) </b> database systems</li>
                        <li><b>(cs 188) </b> artificial intelligence</li>
                        <li><b>(cs 189) </b> machine learning</li>
                        <li><b>(ieor 165) </b> engineering statistics & quality control</li>
                        <li><b>(ieor 170) </b> industrial design</li>
                        <li><b>(ieor 172) </b> probability & risk analysis</li>
                        <li><b>(ieor 195) </b> entrepreneurship and innovation</li>
                    </ul>
                </text>
            </div>
            <div class="button-container">
                <text class="big-text"> </text>
                <text class="medium-text">
                    <b> what i'm currently doing! (´｡• ᵕ •｡`) </b>
                </text>
                <RectanglePolaroid title="ui/ux intern" subtitle="tigertalk" image={tigertalk} />
                <RectanglePolaroid title="product manager" subtitle="develop for good" image={akron}/>
                <RectanglePolaroid title="product designer" subtitle="sproul.club" image={sproul}/>
            </div>
        </div>
    );
}

export default About;
