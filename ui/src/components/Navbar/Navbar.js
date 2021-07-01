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
              <img
                src={logo}
                alt="netflix"
                className="navbar-band img-company"
              />
            </Link>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/tv-shows" className="nav-link">
                  <span style={{ textTransform: 'uppercase' }}>tv</span>shows
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/movies" className="nav-link">
                  movies
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/latest" className="nav-link">
                  latest
                </Link>
              </li>
            </ul>
          </Router>
        </div>
      </div>
    );
  }
}
