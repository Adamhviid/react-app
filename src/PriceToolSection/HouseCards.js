import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { fontSize } from '@mui/system';

const useStyles = makeStyles(theme => ({
  card: {
    position: 'relative',
    display: 'block',
    width: '210px',
    height: '260px',
    marginRight: '30px',
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

  const notSold = actualprice ? (
    <Typography
      variant="body1"
      className={classes.soldPrice}
    >
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
          <Typography variant="body1">
            liggetid: {onMarketDays}
          </Typography>
          <Typography
            variant="body1"
            component="h4"
          >
            {address}
          </Typography>
          <Typography
            variant="body1"
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
  askingPrice: PropTypes.string,
  actualPrice: PropTypes.string
}

export default HouseCards