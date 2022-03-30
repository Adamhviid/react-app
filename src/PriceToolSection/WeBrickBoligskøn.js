import React from 'react'
import PropTypes from 'prop-types'

const WeBrickBoligskøn = props => {
  const {
    boligskøn
  } = props;

  return (
    <div style={{ textAlign: 'center' }}>
      <h3>WeBrick Boligskøn</h3>
      <h2>{boligskøn}</h2>
    </div>
  )
}

WeBrickBoligskøn.propTypes = {
  boligskøn: PropTypes.string
}

export default WeBrickBoligskøn