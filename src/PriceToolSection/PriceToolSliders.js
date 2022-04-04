import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Slider } from '@mui/material'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

const useStyles = makeStyles(theme => ({
  sliderValue: {
    float: 'right'
  },
  sliders: {
    color: '#FF585D',
    paddingBottom: '20px',
  }
}))

const PriceToolSliders = props => {
  const {
    price
  } = props
  const classes = useStyles();
  const [priceValue, setPriceValue] = useState(price)
  const [liggetidValue, setLiggetidValue] = useState(200)

  const handlePriceChange = (event, newValue) => {
    setPriceValue(newValue)
  }

  const handleLiggetidChange = (event, newValue) => {
    setLiggetidValue(newValue)
  }

  return (
    <div>
      <Grid items cs={12}>
        <Typography gutterBottom>
          Tilpas kriterierne herunder for at "lege" og finde den helt rigtige pris
        </Typography>
        <Typography gutterBottom>
          <InfoOutlinedIcon fontSize="small" style={{ color: '#FF585D' }} />
          Din minimums pris
        </Typography>
        <Slider
          value={priceValue}
          min={price / 2}
          max={price * 2}
          valueLabelDisplay="auto"
          onChange={handlePriceChange}
          className={classes.sliders}
        />
        <Typography className={classes.sliderValue} gutterBottom>
          kr. {priceValue},-
        </Typography>
        <Typography>
          <InfoOutlinedIcon fontSize="small" style={{ color: '#FF585D' }} />
          Din max liggetid
        </Typography>
        <Slider
          value={liggetidValue}
          min={0}
          max={400}
          valueLabelDisplay="auto"
          onChange={handleLiggetidChange}
          className={classes.sliders}
        />
        <Typography className={classes.sliderValue} gutterBottom>
          ca. {liggetidValue} dage
        </Typography>
      </Grid>
    </div>
  )
}

PriceToolSliders.propTypes = {
  price: PropTypes.string
}

export default PriceToolSliders
