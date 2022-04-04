import React from 'react'
import { Grid, Typography } from '@mui/material'
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types'


const useStyles = makeStyles({
  price: {
    fontSize: '2rem',
    fontWeight: 'bold'
  }
})

const WeBrickBoligskøn = props => {
  const {
    boligskøn
  } = props;

  const classes = useStyles()

  return (
    <div>
      <Typography>
        WeBrick Boligskøn
      </Typography>
      <Typography className={classes.price}>
        {boligskøn}
      </Typography>
    </div>
  )
}

WeBrickBoligskøn.propTypes = {
  boligskøn: PropTypes.string
}

export default WeBrickBoligskøn