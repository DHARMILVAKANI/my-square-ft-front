import React from 'react';
import './header.scss';
import { NavLink } from 'react-router-dom';
const Header = ({ toggleNavbar, isNavbarExpanded }) => {
  return (
    <header className="header shadow-sm" id="header">
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <a className="navbar-brand logo order-1" href="https://www.mysquarefeet.net">
            <img src="https://www.mysquarefeet.net/assets/images/logo_icon/logo.png" alt="logo" />
          </a>

          <button
            className="navbar-toggler header-button order-3 order-lg-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar-content"
            aria-expanded={isNavbarExpanded ? 'true' : 'false'}
            onClick={toggleNavbar}>
            <i className="las la-bars"></i>
          </button>
          <div className="navbar-collapse order-4 order-lg-3 collapse" id="navbar-content">
            <ul className="navbar-nav nav-menu ms-auto align-items-lg-center">
              <li className="active">
                <div className="navbar-actions navbar-actions--sm">
                  <div className="custom--dropdown">
                    <div className="custom--dropdown__selected dropdown-list__item">
                      <div>
                        <div className="thumb">
                          <img src="https://www.mysquarefeet.net/assets/images/language/660b94fa876ac1712035066.png" alt="image" />
                        </div>
                      </div>
                      <span className="text">English</span>
                      <span className="icon">
                        <i className="las la-angle-down"></i>
                      </span>
                    </div>
                    <ul className="dropdown-list"></ul>
                  </div>
                  <NavLink to="/login" className="btn orange_btn">
                    Login
                  </NavLink>
                </div>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/" end>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/properties">
                  Properties
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/blog">
                  Blog
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="navbar-actions navbar-actions--md order-2 order-lg-4">
            <div className="custom--dropdown">
              <div className="custom--dropdown__selected dropdown-list__item">
                <div>
                  <div className="thumb">
                    <img src="https://www.mysquarefeet.net/assets/images/language/660b94fa876ac1712035066.png" alt="image" />
                  </div>
                </div>
                <span className="text">English</span>
                <span className="icon">
                  <i className="las la-angle-down"></i>
                </span>
              </div>
              <ul className="dropdown-list"></ul>
            </div>
            <NavLink to="/login" className="btn orange_btn">
              Login
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
