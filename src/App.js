import React, { Component } from 'react';
import "./contents/resources/App.css";
import { Route, Switch, Redirect } from 'react-router-dom';
import AboutMe from './contents/AboutMe';
import Home from './contents/Home';
import Other from './contents/Others';

export class App extends Component {
  render() {

    return (
      <div className="App">
        <div className="navbar">
          <a href="/">Home</a>
          <a href="/">Resume</a>
          <a href="/projects">Projects</a>
          <a href="/others">Others</a>
          <a href="/about">About</a>
        </div>
        <div className="maincontents">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/projects" component={AboutMe} />
            <Route path="/others" component={Other} />
            <Route path="/about" component={AboutMe} />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    )

  }
}
export default App
