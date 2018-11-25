import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router basename="/react-auth-ui/">
        <div className="App">
          <div className="Left_Side">
            <div className="welcome">
            fabrik
            </div>    
            <div>
              <img className="logo" src="https://user-images.githubusercontent.com/24444124/48596216-0c592d00-e926-11e8-94c5-625d84081929.png" alt="Fabrik Logo"></img>
            </div>
          </div>
          <div className="Form">
            <div className="PageSwitcher">
                <NavLink to="/sign-in" activeClassName="PageSwitcherItem--Active" className="PageSwitcherItem">Sign In</NavLink>
                <NavLink exact to="/" activeClassName="PageSwitcherItem--Active" className="PageSwitcherItem">Sign Up</NavLink>
              </div>

              <div className="FormTitle">
                  <NavLink to="/sign-in" activeClassName="FormTitleLink--Active" className="FormTitleLink">Sign In</NavLink> or <NavLink exact to="/" activeClassName="FormTitleLink--Active" className="FormTitleLink">Sign Up</NavLink>
              </div>

              <Route exact path="/" component={SignUpForm}>
              </Route>
              <Route path="/sign-in" component={SignInForm}>
              </Route>
          </div>

        </div>
      </Router>
    );
  }

  newMethod() {
    return <p>hello</p>;
  }
}

export default App;
