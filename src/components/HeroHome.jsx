import React, { Fragment } from 'react';
import HomeImage from '../images/homeimage.jpeg';
import './HeroHome.css';
import PropTypes from 'prop-types';
function HeroHome({ title, introText, introDesc }) {
  return (
    <Fragment>
      <div className="home__hero-section darkBg">
        <div className="container">
          <div className="row home__hero-row">
            <div className="col">
              <div className="home__hero-text-wrapper">
                <div className="top-line">{title}</div>
                <p className="paragraph">{introText}</p>
                <br /> 
                <p className="paragraph">{introDesc}</p>

              </div>
            </div>
            <div className="col">
              <div className="home__hero-img-wrapper">
                <img
                  src={HomeImage}
                  alt="Image of apartments"
                  className="home__hero-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

HeroHome.defaultProps = {
  title: 'Lakewood real estate',
  introText: 'The best real estate company around',
  introDesc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo quibusdam deleniti ullam earum eum dolorum eos harum veritatis nam. Temporibus id expedita veritatis repudiandae porro nobis reiciendis provident quasi. Eaque.',
};

HeroHome.propTypes = {
  title: PropTypes.string.isRequired,
  introText: PropTypes.string.isRequired,
};
export default HeroHome;

