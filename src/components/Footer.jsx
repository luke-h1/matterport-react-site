import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { BsFillHouseFill } from 'react-icons/bs';
import './Footer.css';
function Footer({ title, copyright }) {
  return (
    <div className="footer-container">
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              <BsFillHouseFill className="navbar-icon" />
              {title}
            </Link>
          </div>
          <small className="website-rights">{copyright}</small>
          <div className="social-icons">
            <a
              className="social-icon-link"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              className="social-icon-link"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Linkedin"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

Footer.defaultProps = {
  title: 'Lakewood Real-estate',
  copyright: 'Lakewood Real-estate © 2020 ',
};
Footer.propTypes = {
  title: PropTypes.string.isRequired,
  copyright: PropTypes.string.isRequired,
};
export default Footer;