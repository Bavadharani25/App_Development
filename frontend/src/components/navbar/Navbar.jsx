import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Navbar.css';
import { CSSTransition } from 'react-transition-group';
import logo from './courier.png';

function Navbar() {
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  return (
    <nav className="navbar">
      <div>
        <Link to="/">
          <img className='logo' src={logo} alt="Deliveroo Logo" height="40" />
          TPort
        </Link>
      </div>
      <ul>
        <CSSTransition classNames="fade" timeout={300}>
          <li>
            <Link to="/">HOME</Link>
          </li>
        </CSSTransition>
        <CSSTransition classNames="fade" timeout={300}>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
        </CSSTransition>
        {isAuthenticated ? (
          <CSSTransition classNames="fade" timeout={300}>
            <li>
              <Link id="profile" to="/profile">
                {user.name || user.email}
              </Link>
            </li>
          </CSSTransition>
        ) : (
          <>
            <CSSTransition classNames="fade" timeout={300}>
              <li>
                <Link id="login" to="/login">
                  LOGIN
                </Link>
              </li>
            </CSSTransition>
            <CSSTransition classNames="fade" timeout={300}>
              <li>
                <Link id="admin" to="/adminlogin">
                  ADMIN
                </Link>
              </li>
            </CSSTransition>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
