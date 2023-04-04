import React from 'react'

import PropTypes from 'prop-types'

import './feature-card.css'

const FeatureCard = (props) => {
  return (
    <div className="feature-card-feature-card">
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="feature-card-image"
      />
      <div className="feature-card-container">
        <h2 className="feature-card-text">{props.heading}</h2>
      </div>
    </div>
  )
}

FeatureCard.defaultProps = {
  heading: 'Tomat',
  image_alt: 'image',
  image_src:
    'https://img.freepik.com/free-photo/tomato-isolated_2829-17582.jpg?w=826&t=st=1680360412~exp=1680361012~hmac=3e7dab527fad8ee9f63da858574e7e74eb6990c332ba88b9a965d8ab7342fc95',
}

FeatureCard.propTypes = {
  heading: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
}

export default FeatureCard
