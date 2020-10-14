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
      <div className="showcase">
        <div className="container">
          <div className="row home__hero-row">
            <div className="col">
              <div className="home__hero-text-wrapper">
                <h1>Take a look at the property of the week..</h1>
              </div>
            </div>
            <div className="col">
              <div className="center">
                <iframe className='showcase__matterport'
                  width="653"
                  height="480"
                  src="https://my.matterport.com/show/?m=4pYEangv54B&mls=1"
                  frameborder="0"
                  allowfullscreen
                  allow="xr-spatial-tracking"
                ></iframe>
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
  introDesc:
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo quibusdam deleniti ullam earum eum dolorum eos harum veritatis nam. Temporibus id expedita veritatis repudiandae porro nobis reiciendis provident quasi. Eaque.',
};

HeroHome.propTypes = {
  title: PropTypes.string.isRequired,
  introText: PropTypes.string.isRequired,
};
export default HeroHome;
