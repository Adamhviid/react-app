import React from 'react'
import { Grid, Typography } from '@mui/material'
import PropTypes from 'prop-types'

const WeBrickBoligskøn = props => {
  const {
    boligskøn
  } = props;

  return (
    <div>
      <Typography>
        WeBrick Boligskøn
      </Typography>
      <Typography>
        {boligskøn}
      </Typography>
    </div>
  )
}

WeBrickBoligskøn.propTypes = {
  boligskøn: PropTypes.string
}

export default WeBrickBoligskøn