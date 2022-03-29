import React from 'react'
import PropTypes from 'prop-types'

const LikedImage = props => {
  return (
    <div>
      <p>
        LikedImages
      </p>
      <div>
        {props.item}
      </div>
    </div>
  )
}

LikedImage.propTypes = {}

export default LikedImage