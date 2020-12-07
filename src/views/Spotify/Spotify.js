import React from 'react';
import { Link } from 'react-router-dom';

import NavigationButton from './../../components/NavigationButton.js'
import BackButton from './../../components/BackButton.js'

import './Spotify.css';
import genres from "./../../assets/spotify-demos/genres.png"
import popularity from "./../../assets/spotify-demos/popularity.png"
import rhizomeROC from "./../../assets/spotify-demos/rhizome_roc.png"

function Spotify() {
  return (
      <div>
          <div className="backbutton">
              <BackButton link="/software" text="back to projects"/>
          </div>
          <div className="navigation-menu">
              <a href="/spotify#overview" style={{ textDecoration: 'none' }}>
                  <div className="row">
                      <div class="text">
                        Overview
                      </div>
                  </div>
              </a>
              <a href="/spotify#exploration" style={{ textDecoration: 'none' }}>
                  <div className="row">
                      <div class="text">
                        Exploration
                      </div>
                  </div>
              </a>
              <a href="/spotify#model" style={{ textDecoration: 'none' }}>
              <div className="row">
                  <div class="text">
                    Logistic Regression Model
                  </div>
              </div>
              </a>
          </div>
          <div className="spotify">
              <a name="overview">
                  <div className="title">
                      Spotify API
                  </div>
              </a>
              <div className="subtitle">
                  Overview
              </div>
              <div className="text">
                  I've been playing piano since the age of four, singing (perhaps out-of-tune) since the age of six, and
                  listening to Spotify at least an hour a day since I first got a Premium account in college.
              </div>
              <div className="text">
                  I discovered the Spotify API after researching a little bit about Spotify Wrapped and decided I wanted
                  to do more research about my personal listening habits!
              </div>
              <div className="text">
                  This page will dive into the projects that I was able to create using the API:
                  <ul>
                      <li>Did exploratory data analysis to find my favorite genres and artists</li>
                      <li>Trained a linear regression model to predict whether I'd like a song</li>
                  </ul>
              </div>
              <div className="text">
              I used Jupyter Notebook, pandas, matplotlib, requests, seaborn, numpy, and scikit-learn for this project.
              </div>
              <a name="exploration">
                  <div className="spacer" />
              </a>
              <div className="subtitle">
                  Exploration
              </div>
              <div className="text">
                  I first explored which genres I listened to the most by aggregating each genres' appearance in the list
                  of genres corresponding to my top 20 artists.
              </div>
              <img className="image" src={genres} />
              <div className="text">
                  I noticed that the API returns a feature called "popularity" for each artist, and have always been a little
                  curious about whether the music I listen to is mainstream. To find out, I graphed the correlation between
                  artist ranking and popularity:
              </div>
              <img className="image" src={popularity} />
              <div className="text">
                  With an r-value of -0.44945735259442465, I'd say there is definitely a chance that this could be true. A
                  negative r-value of this magnitude could imply that my more popular artists have higher popularity scores--
                  a.k.a. a negative correlation between personal preference and artist popularity.
              </div>
              <a name="model">
                  <div className="spacer" />
              </a>
              <div className="subtitle">
                  Logistic Regression Model
              </div>
              <div className="text">
                  I personally have had a variety of hit-and-misses with Spotify's recommendations algorithm. When I saw that
                  the API could return certain features of song tracks, I wanted to see if I could build myself a personalized
                  recommendations algorithm using these features and the information that I know about my personal preferences.
              </div>
              <div className="text">
                  The features for each track returned by the API include:
                  <ul>
                      <li>acousticness</li>
                      <li>danceability</li>
                      <li>energy</li>
                      <li>instrumentalness</li>
                      <li>key</li>
                      <li>liveness</li>
                      <li>loudness</li>
                      <li>speechiness</li>
                      <li>tempo</li>
                      <li>time signature</li>
                      <li>valence</li>
                  </ul>
              </div>
              <div className="text">
                  Using the API, I pulled 552 songs from my own playlists and my friends' playlists and added a 0 (dislike)
                  and 1 (like) label to each song. I cleaned the data and prepared it for training, including changes such as:
                  <ul>
                      <li>one-hot-encoding the "key" column</li>
                      <li>filling null values</li>
                      <li>removing time signature as a feature after realizing most values were missing or redundant (i.e.
                          all 4's) or incorrect (i.e. 0)</li>
                  </ul>
              </div>
              <div className="text">
                  Afterwards I did a 9:1 split of the data and trained a Logistic Regression model on the data using
                  scikit-learn. With just these basic features, the model reached:
                  <ul>
                      <li>Training accuracy of 78.47%</li>
                      <li>Validation accuracy of 71.43%</li>
                  </ul>
              </div>
              <div className="text">
                  Plotting the ROC curve of the model reveals:
              </div>
              <img className="image" src={rhizomeROC} />
              <div className="text">
                  I also wanted to test how well the model responds to new data, so I created a completely new playlist of
                  40 songs I've never listened to before and had the model predict 0-1 labels of preference. I listened to the
                  songs and manually labeled them, and then calculated the model's accuracy to be 65%.
              </div>
              <div className="text">
                  This wasn't as stastically significant as I wanted it to be (p=0.04). Some ideas I have moving forward in
                  the next iteration of this model are to add:
                  <ul>
                      <li>Add genre as a feature</li>
                      <li>Add artist name as a feature</li>
                      <li>Add album name as a feature</li>
                  </ul>
              </div>
              <div className="spacer" />
          </div>
      </div>
  );
}

export default Spotify;
