import React from 'react'

import PropTypes from 'prop-types'

import './feature-card13.css'

const FeatureCard13 = (props) => {
  return (
    <div className={`feature-card13-feature-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="feature-card13-image"
      />
    </div>
  )
}

FeatureCard13.defaultProps = {
  rootClassName: '',
  image_alt: 'image',
  image_src: '/playground_assets/pngwing.com%20%5B2%5D-600w.png',
}

FeatureCard13.propTypes = {
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
}

export default FeatureCard13
