import React from 'react'

import PropTypes from 'prop-types'

import './feature-card1.css'

const FeatureCard1 = (props) => {
  return (
    <div className={`feature-card1-feature-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="feature-card1-image"
      />
      <h2 className="feature-card1-text">{props.title}</h2>
      <span className="feature-card1-text1">{props.description}</span>
    </div>
  )
}

FeatureCard1.defaultProps = {
  image_src: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  image_alt: 'image',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
  title: 'Lorem ipsum',
  rootClassName: '',
}

FeatureCard1.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default FeatureCard1
