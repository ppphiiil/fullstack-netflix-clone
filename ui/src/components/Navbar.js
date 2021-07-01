import React, { Component } from 'react';
import { Link, Router } from 'react-router-dom';
import logo from '../../src/logo.png';
import styled from 'styled-components';

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <Router>
          <Link to="/">
            <img
              src={logo}
              alt="netflix"
              className="navbar-band"
              // style={{ color: 'var(--lightBlue)' }}
            />
          </Link>
          <ul className="navbar-nav align-items-center">
            <li className="nav-item ml-5">
              <Link to="/" className="nav-link">
                home
              </Link>
            </li>
            <li className="nav-item ml-5">
              <Link to="/tv-shows" className="nav-link">
                tv shows
              </Link>
            </li>
            <li className="nav-item ml-5">
              <Link to="/movies" className="nav-link">
                movies
              </Link>
            </li>
            <li className="nav-item ml-5">
              <Link to="/latest" className="nav-link">
                latest
              </Link>
            </li>
          </ul>
        </Router>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background: var(--mainBlack);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;
