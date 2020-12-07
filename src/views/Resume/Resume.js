import React from 'react';

import NavigationButton from './../../components/NavigationButton.js'
import BackButton from './../../components/BackButton.js'
import './Resume.css';

import resume from "./../../assets/resume-preview.png";

import PDF from "react-pdf-js";

function Resume() {
  return (
      <div>
        <div className="resume">
            <a href="https://drive.google.com/file/d/1PqEBOfa-BTcA_8s2sghYpWHKMOYzbH9Z/view?usp=sharing" target="_blank">
                <img className="pdf" src={resume} />
            </a>
        </div>
      </div>
  );
}

export default Resume;
