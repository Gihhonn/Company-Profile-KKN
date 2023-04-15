import React from 'react'

import PropTypes from 'prop-types'

import './gallery-card.css'

const GalleryCard = (props) => {
  return (
    <div className="gallery-card-gallery-card">
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="gallery-card-image"
      />
      <h2 className="gallery-card-text">{props.heading}</h2>
      <h4 className="gallery-card-text1">{props.heading1}</h4>
      <button className="gallery-card-button button">{props.button}</button>
      <button className="gallery-card-button1 button">{props.button1}</button>
      <label className="gallery-card-text2">{props.text}</label>
    </div>
  )
}

GalleryCard.defaultProps = {
  text: 'Sold Out',
  image_alt: 'image',
  heading: 'Ubi Merah',
  button: 'More',
  image_src:
    'https://img.freepik.com/free-photo/delicious-cooked-sweet-potato_1205-44.jpg?1&w=1380&t=st=1679759990~exp=1679760590~hmac=01174fd2169424386274c450233b05536aa0cff478059ddf1a2cde016cbcee1f',
  button1: 'Order Now',
  heading1: 'Rp 00.000,00-/Kg',
}

GalleryCard.propTypes = {
  text: PropTypes.string,
  image_alt: PropTypes.string,
  heading: PropTypes.string,
  button: PropTypes.string,
  image_src: PropTypes.string,
  button1: PropTypes.string,
  heading1: PropTypes.string,
}

export default GalleryCard
