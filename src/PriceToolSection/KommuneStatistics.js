import React from 'react'
import { makeStyles } from '@material-ui/styles'
import PropTypes from 'prop-types'
import { Grid, Typography } from '@mui/material'

const useStyle = makeStyles({
  statistic: {
    color: '#FF585D',
    textAlign: 'center',
    fontSize: '2em',
    fontWeight: 'bold'
  },
  statisticSubtitle: {
    textAlign: 'center',
    color: '#d3d3d3'
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
      <h3>Boligstatstik i kommunen</h3>
      <Grid container spacing={2}>
        <Grid item md={6}>
          <Typography className={classes.statistic}>
            {numberOfHouses}
          </Typography>
          <Typography classname={classes.statisticSubtitle}>
            Bolig til salg i kommunen
          </Typography>
        </Grid>
        <Grid item md={6}>
          <Typography className={classes.statistic}>
            {avgSquareMeterPrice}
          </Typography>
          <Typography classname={classes.statisticSubtitle}>
            Gennemsnitlig m^2 pris i kommunen
          </Typography>
        </Grid>
        <Grid item md={6}>
          <Typography className={classes.statistic}>
            {avgSaletime}
          </Typography>
          <Typography classname={classes.statisticSubtitle}>
            Gennemsnitlig salgstid i kommunen
          </Typography>
        </Grid>
        <Grid item md={6}>
          <Typography className={classes.statistic}>
            {avgPrisnedslag}
          </Typography>
          <Typography classname={classes.statisticSubtitle}>
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