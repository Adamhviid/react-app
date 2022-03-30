import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import TextTruncate from 'react-text-truncate';

const useStyles = makeStyles(theme => ({
  card: {
    position: 'relative',
    display: 'block',
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
    boxShadow: theme.shadows[3],
    borderRadius: theme.spacing(1),
    overflow: 'hidden',
    textAlign: 'center'
  },
  cardMedia: {
    position: 'relative',
    width: '100%',
    paddingBottom: '50%',
    borderRadius: theme.spacing(1),
    overflow: 'hidden'
  },
  cardImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
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
  title: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1)
  },
  price: {
    fontWeight: 'bold'
  },
  card: {
    width: '200px',
    height: '250px',
    padding: '10px',
    margin: '10px'
  }
}));

const HouseCards = props => {
  const {
    image,
    address,
    price,
    onMarketDays,
  } = props;

  const classes = useStyles();

  return (
    <div>
      <Card className={classes.card}>
        <CardMedia>
          {image}
        </CardMedia>
        <CardContent>
          <Typography
            variant="body1"
            component="h4"
            className={classes.title}
          >
            <TextTruncate
              line={2}
              element="span"
              truncateText="…"
              text={address} />
          </Typography>
          <Typography
            variant="body1"
            className={classes.price}
          >
            {price}
          </Typography>
          <Typography variant="body1">
            {onMarketDays}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

HouseCards.propTypes = {
  image: PropTypes.element,
  text: PropTypes.string,
  price: PropTypes.string
}

export default HouseCards