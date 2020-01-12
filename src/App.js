import React, { Component } from 'react';
import "./contents/resources/App.css";
import { Link, Route, Switch } from 'react-router-dom';

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
            <li>AboutMe</li>
          </ul>
        </div>
        <div className="maincontents">
          this is content
      </div>
      </div>
    )

  }
}
export default App
