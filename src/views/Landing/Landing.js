import React from 'react';

import Button from './../../components/Button.js'
import Header from './../../components/Header.js'

import './Landing.css';
import profile from './../../assets/profile.jpg';
import linkedin from './../../assets/linkedin.png';
import github from './../../assets/github.png';
import gmail from './../../assets/gmail.png';

function Landing() {
  return (
      <div className="landing" id="snow">
          <div className="glass">
              <Header />
              <div className="about">
                  <div className="imageContainer">
                      <img
                          className="image"
                          src={profile}
                      />
                  </div>
                  <div className="descriptionContainer">
                      <div className="hey">
                          Hey there!
                      </div>
                      <div className="text">
                          I’m <b>Izzie Lau</b> and I’m a junior at UC Berkeley. I’m interested in the intersection
                          of human-computer interaction with real-world applications of CS and data science.
                          I’ve previously worked on web development, mobile/extended reality applications, and machine
                          learning projects and am always looking for ways to expand my knowledge to help
                          my community.
                      </div>
                      <div className="text">
                          At Berkeley, I'm majoring in Computer Science and Cognitive Science, minoring in
                          Data Science and IEOR, and am also pursuing a certificate in Entrepreneurship & Technology!
                          As you may be able to tell-- I have a wide range of interests in the applications of CS
                          and am sure to translate my <b>hands-on, learn-all approach</b> to the workplace. :)
                      </div>
                      <div className="text">
                          I’m currently searching for <b>internships</b> in UI/UX design, frontend engineering, data
                          analytics, or machine learning-- so please reach out if you want to chat about an opportunity!
                          (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧
                      </div>

                  </div>
              </div>
          </div>
          <div className="contact">
              <div className="circle">
                  <a target="_blank" href="https://www.linkedin.com/in/izzielau/">
                      <img
                          src={linkedin}
                          className="logo"
                          alt="linkedin"
                      />
                  </a>
              </div>
              <div className="circle">
                  <a target="_blank" href="https://www.github.com/izzielau/">
                      <img
                          src={github}
                          className="logo"
                          alt="github"
                      />
                  </a>
              </div>
              <div className="circle">
                  <a target="_blank" href="mailto:isabellalau@berkeley.edu">
                      <img
                          src={gmail}
                          className="logo"
                          alt="github"
                      />
                  </a>
              </div>
          </div>
      </div>
  );
}

export default Landing;
