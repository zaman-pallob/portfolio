import React, { Component } from 'react';
import "./contents/resources/App.css";
import { Link, Route, Switch, Redirect } from 'react-router-dom';

import AboutMe from './contents/AboutMe';
import Home from './contents/Home';

export class App extends Component {
  render() {

    return (
      <div className="App">
        <div className="navbar">
          <a href="/">Home</a>
          <a href="#">Resume</a>
          <a href="#">Projects</a>
          <a href="#">Other</a>
          <a href="/about">About</a>
        </div>
        <div className="maincontents">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={AboutMe} />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    )

  }
}
export default App
