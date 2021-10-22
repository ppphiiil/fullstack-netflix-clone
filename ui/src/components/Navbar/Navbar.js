import React, { Component } from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import logo from '../../logo.png';
import './Navbar.css';

export default class Navbar extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="navbar">
          <Router>
            <Link to="/">
              <img className="logo"
                src={logo}
                alt="netflix"
              
              />
            </Link>
            <ul className="navbar-nav">
              <li className="nav-item">
              
                  home
             
              </li>
              <li className="nav-item">
                
                  TVshows
               
              </li>
              <li className="nav-item">
              
                  movies
              
              </li>
              <li className="nav-item">
               
                  latest
              
              </li>
            </ul>
          </Router>
        </div>
      </div>
    );
  }
}
