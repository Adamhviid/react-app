import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardMedia, Typography } from '@mui/material'

const useStyles = makeStyles(theme => ({
  card: {
    position: 'relative',
    display: 'block',
    width: '210px',
    height: '245px',
    margin: '5px',
    backgroundColor: 'transparent',
    boxShadow: theme.shadows[3],
    borderRadius: theme.spacing(1),
    overflow: 'hidden',
    textAlign: 'left',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    '& sup': {
      fontSize: '0.5em',
    }
  },
  cardMedia: {
    position: 'relative',
    borderRadius: theme.spacing(1),
    overflow: 'hidden'
  },
  price: {
    fontWeight: 'bold'
  },
  soldPrice: {
    fontWeight: 'bold',
    fontSize: '1.1em'
  }
}));

const HouseCards = props => {
  const {
    image,
    address,
    askingPrice,
    actualprice,
    onMarketDays,
  } = props;

  const classes = useStyles();

  const noAddress = address ? (
    <Typography >
      {address}
    </Typography>
  ) : null

  const notSold = actualprice ? (
    <Typography className={classes.soldPrice}>
      solgt til {actualprice}
    </Typography>
  ) : null

  return (
    <div>
      <Card className={classes.card}>
        <CardMedia className={classes.cardMedia}>
          {image}
        </CardMedia>
        <CardContent className={classes.cardContent}>
          <Typography >
            liggetid: <span style={{ fontWeight: 'bold' }}>{onMarketDays}</span>
          </Typography>
          {noAddress && (
            <>
              {noAddress}
            </>
          )}
          <Typography
            
            className={classes.price}
          >
            udbudt til {askingPrice}
          </Typography>
          {notSold && (
            <>
              {notSold}
            </>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

HouseCards.propTypes = {
  image: PropTypes.element,
  text: PropTypes.string,
  address: PropTypes.string,
  askingPrice: PropTypes.string,
  actualPrice: PropTypes.string
}

export default HouseCards