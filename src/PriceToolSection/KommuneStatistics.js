import React from 'react'
import { makeStyles } from '@material-ui/styles'
import PropTypes from 'prop-types'
import { Grid, Typography } from '@mui/material'

const useStyle = makeStyles({
  Grid: {
  },
  statistic: {
    color: '#FF585D',
    textAlign: 'center',
    fontSize: '2.5em',
    fontWeight: 'bold',
    padding: '10px'
  },
  statisticSubtitle: {
    textAlign: 'center',
    color: 'grey'
  },
})

const KommuneStatistics = props => {
  const {
    numberOfHouses,
    avgSquareMeterPrice,
    avgSaletime,
    avgPrisnedslag
  } = props

  const classes = useStyle()

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item md={6}>
          <Typography className={classes.statistic}>
            {numberOfHouses}
          </Typography>
          <Typography className={classes.statisticSubtitle}>
            Bolig til salg i kommunen
          </Typography>
        </Grid>
        <Grid item md={6}>
          <Typography className={classes.statistic}>
            {avgSquareMeterPrice}
          </Typography>
          <Typography className={classes.statisticSubtitle}>
            Gennemsnitlig m<sup>2</sup> pris i kommunen
          </Typography>
        </Grid>
        <Grid item md={6}>
          <Typography className={classes.statistic}>
            {avgSaletime}
          </Typography>
          <Typography className={classes.statisticSubtitle}>
            Gennemsnitlig salgstid i kommunen
          </Typography>
        </Grid>
        <Grid item md={6}>
          <Typography className={classes.statistic}>
            {avgPrisnedslag}
          </Typography>
          <Typography className={classes.statisticSubtitle}>
            Gennemsnitlig prisnedslag i kommunen
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}

KommuneStatistics.propTypes = {
  numberOfHouses: PropTypes.string,
  avgSquareMeterPrice: PropTypes.string,
  avgSaletime: PropTypes.string,
  avgPrisnedslag: PropTypes.string,
}

export default KommuneStatistics