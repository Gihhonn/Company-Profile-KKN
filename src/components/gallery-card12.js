import React from 'react'

import PropTypes from 'prop-types'

import './gallery-card12.css'

const GalleryCard12 = (props) => {
  return (
    <div className={`gallery-card12-gallery-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="gallery-card12-image"
      />
      <h2 className="gallery-card12-text">{props.title}</h2>
      <h4 className="gallery-card12-text1">{props.Harga}</h4>
      <button className="gallery-card12-button button">
        {props.detail_button}
      </button>
      <button className="gallery-card12-button1 button">
        {props.buy_button}
      </button>
    </div>
  )
}

GalleryCard12.defaultProps = {
  detail_button: 'More',
  title: 'Project Title',
  buy_button: 'Order Now',
  Button: 'More',
  Harga: 'Rp 00.000,00-/Kg',
  image_alt: 'image',
  rootClassName: '',
  image_src:
    'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEyfHxmb3Jlc3R8ZW58MHx8fHwxNjI2MjUxMjg4&ixlib=rb-1.2.1&h=1200',
}

GalleryCard12.propTypes = {
  detail_button: PropTypes.string,
  title: PropTypes.string,
  buy_button: PropTypes.string,
  Button: PropTypes.string,
  Harga: PropTypes.string,
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
}

export default GalleryCard12
