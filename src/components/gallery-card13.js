import React from 'react'

import PropTypes from 'prop-types'

import './gallery-card13.css'

const GalleryCard13 = (props) => {
  return (
    <div className={`gallery-card13-gallery-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="gallery-card13-image"
      />
      <h2 className="gallery-card13-text">{props.title}</h2>
      <span className="gallery-card13-text1">{props.subtitle}</span>
    </div>
  )
}

GalleryCard13.defaultProps = {
  image_alt: 'image',
  rootClassName: '',
  title: 'Project Title',
  image_src:
    'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEyfHxmb3Jlc3R8ZW58MHx8fHwxNjI2MjUxMjg4&ixlib=rb-1.2.1&h=1200',
  subtitle: 'Lorem ipsum dolor sit amet',
}

GalleryCard13.propTypes = {
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  title: PropTypes.string,
  image_src: PropTypes.string,
  subtitle: PropTypes.string,
}

export default GalleryCard13
