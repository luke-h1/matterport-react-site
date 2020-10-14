import React from 'react';
import { IconContext } from 'react-icons/lib';
import './Apartments.css';
import PropTypes from 'prop-types';
function Apartments({ title, iconStyles }) {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div>
        <div className="project-wrapper">
          <h2 className="project__title">{title}</h2>
          <div className="project-container">
            <div className="project-card">
              <div className="img-container">
                <iframe
                  className="showcase__matterport"
                  width="333"
                  height="280"
                  src="https://my.matterport.com/show/?m=4pYEangv54B&mls=1"
                  frameborder="0"
                  allowfullscreen
                  allow="xr-spatial-tracking"
                ></iframe>
              </div>
              <h3 className="project__card-title">lorem</h3>
              <p className="project-description">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta modi vel excepturi eum veniam asperiores autem consectetur tempore praesentium? Distinctio, cupiditate eligendi. Dolores eveniet ab et modi esse nesciunt. Architecto.
              </p>
              <div className="icon-container">
                <a
                  className="icon-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt=""
                  href="#"
                ></a>
              </div>
            </div>

            <div className="project-card">
              <div className="img-container">
                <iframe
                  className="showcase__matterport"
                  width="333"
                  height="280"
                  src="https://my.matterport.com/show/?m=4pYEangv54B&mls=1"
                  frameborder="0"
                  allowfullscreen
                  allow="xr-spatial-tracking"
                ></iframe>
              </div>
              <h3 className="project__card-title">lorem</h3>
              <p className="project-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae doloribus error sint molestiae dicta aspernatur aut qui eum, quod illo veniam. Illo odio autem, placeat iusto hic accusantium architecto error.</p>
              <div className="icon-container">
                <a
                  className="icon-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt=""
                  href="#"
                ></a>
                <a
                  className="icon-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt=""
                  href="#"
                ></a>
              </div>
            </div>
            <div className="project-card">
              <div className="img-container">
                <iframe
                  className="showcase__matterport"
                  width="333"
                  height="280"
                  src="https://my.matterport.com/show/?m=4pYEangv54B&mls=1"
                  frameborder="0"
                  allowfullscreen
                  allow="xr-spatial-tracking"
                ></iframe>
              </div>
              <h3 className="project__card-title">lorem</h3>
              <p className="project-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae doloribus error sint molestiae dicta aspernatur aut qui eum, quod illo veniam. Illo odio autem, placeat iusto hic accusantium architecto error.</p>
              <div className="icon-container">
                <a
                  className="icon-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt=""
                  href="#"
                ></a>
                <a
                  className="icon-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt=""
                  href="#"
                ></a>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}

Apartments.defaultProps = {
  title: 'Apartments',
  iconStyles: 'icon-social',
  Image1: '../images/project-img-1.jpeg',
};

Apartments.propTypes = {
  title: PropTypes.string.isRequired,
  iconStyles: PropTypes.string.isRequired,
};

export default Apartments;
