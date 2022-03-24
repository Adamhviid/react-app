import React from 'react'
import { Grid, Typography } from '@mui/material'
import InfoBox from '../Layout/InfoBox'

function PropertyData() {
  return (
    <div style={{ textAlign: 'right', maxWidth:'300px' }}>
      <Typography variant="h4" component="h1" style={{ fontWeight: 'bold', color: '#000' }}>
        Lidt om boligen
      </Typography>
      <InfoBox hasPadding>
        <Grid container spacing={2}>
          <Grid item xs={6} >
            <p>Boligareal</p>
            <p>Værelser</p>
            <p>Toiletter</p>
            <p>Ekstra</p>
            <p>Grundareal</p>
          </Grid>
          <Grid item xs={6} style={{ textAlign: 'left' }}>
            <p>20m^2</p>
            <p>2</p>
            <p>10</p>
            <p>1 garage</p>
            <p>200m^2</p>
          </Grid>
        </Grid>
      </InfoBox>
    </div>
  )
}

export default PropertyData