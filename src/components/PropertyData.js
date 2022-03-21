import React from 'react'
import { Grid } from '@mui/material'

function PropertyData() {
  return (
    <div style={{textAlign:'right'}}>
      <h2>Hej lidt om boligen</h2>
      <div style={{ borderStyle: 'groove', padding: '10px' }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <p>Boligareal</p>
            <p>Værelser</p>
            <p>Toiletter</p>
            <p>Ekstra</p>
            <p>Grundareal</p>
          </Grid>
          <Grid item xs={6}>
            <p>20m^2</p>
            <p>2</p>
            <p>10</p>
            <p>1 garage</p>
            <p>200m^2</p>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default PropertyData