import React, { Component } from 'react';
import "./contents/resources/App.css";
import { Link, Route, Switch } from 'react-router-dom';

import AboutMe from './contents/AboutMe';
export class App extends Component {
  render() {

    return (
      <div className="App">
        <div className="navbar">
          <ul>
            <li>Home</li>
            <li>Resume</li>
            <li>Projects</li>
            <li>Others</li>
            <li><Link to="/about" className="link">AboutMe</Link></li>
          </ul>
        </div>
        <div className="maincontents">
          <Switch>
            <Route path="/about" component={AboutMe} />
          </Switch>
        </div>
      </div>
    )

  }
}
export default App
