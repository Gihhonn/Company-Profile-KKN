import React from 'react'

import PropTypes from 'prop-types'

import './feature-card12.css'

const FeatureCard12 = (props) => {
  return (
    <div className={`feature-card12-feature-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="feature-card12-image"
      />
    </div>
  )
}

FeatureCard12.defaultProps = {
  image_alt: 'image',
  rootClassName: '',
  image_src: '/playground_assets/pngwing.com%20%5B2%5D-200h.png',
}

FeatureCard12.propTypes = {
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
}

export default FeatureCard12
