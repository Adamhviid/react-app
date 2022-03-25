import React from 'react'
import PropTypes from 'prop-types'

const UseLike = props => {
  const {
    item,
  } = props
  return (
    <div>
      {console.log({item})}
    </div>
  )
}

UseLike.propTypes = {
  item: PropTypes.object
}

export default UseLike