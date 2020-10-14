import React, { Fragment, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { BsFillHouseFill } from 'react-icons/bs';
import { FaTimes, FaBars } from 'react-icons/fa';
import PropTypes from 'prop-types';
function Navbar({ navLinkStyles, iconStyles, title }) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <Fragment>
      <nav className="navbar">
        <div className="navbar-container container">
          <Link
            to="/"
            className="navbar-logo"
            onClick={closeMobileMenu}
            onBlur={closeMobileMenu}
          >
            <BsFillHouseFill className={iconStyles} />
            <p className="lead">{title}</p>
          </Link>
          <div className="menu-icon" onClick={handleClick} onBlur={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link
                to="/"
                className={navLinkStyles}
                onClick={closeMobileMenu}
                onBlur={closeMobileMenu}
              >
                Home
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link
                to="/houses"
                className={navLinkStyles}
                onClick={closeMobileMenu}
                onBlur={closeMobileMenu}
              >
                Houses
              </Link>
            </li> */}
            <li className="nav-item">
              <Link
                to="/apartments"
                className={navLinkStyles}
                onClick={closeMobileMenu}
                onBlur={closeMobileMenu}
              >
                Apartments
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  );
}

Navbar.defaultProps = {
  title: 'Lakewood real-estate',
  iconStyles: 'navbar-icon',
  navLinkStyles: 'nav-links',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;
