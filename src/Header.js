import React from 'react';
import './Header.css';

import NavigationButton from './components/NavigationButton.js'
import Landing from './views/Landing/Landing';

import './Header.css'

class Header extends React.Component {
  render() {
    return (
      <div>
          <div className="NavigationBar">
              <div className="NavigationBar-Left">
                  <NavigationButton link="/" text="Izzie Lau"/>
              </div>
              <div className="NavigationBar-Right">
                  <NavigationButton className="button" link="/software" text="Software"/>
                  <NavigationButton className="button" link="/design" text="Design"/>
              </div>
          </div>
      </div>
    );
  }
}

export default Header;
