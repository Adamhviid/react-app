import React from 'react'
import { Grid, Typography, Slider } from '@mui/material'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

export default function PriceToolSliders() {
  return (
    <div>
      <Grid items cs={12}>
        <Typography>
          Tilpas kriterierne herunder for at "lege" og finde den helt rigtige pris
        </Typography>
        <Typography>
          <InfoOutlinedIcon fontSize="small" style={{ color: '#FF585D' }} /> Din minimums pris
        </Typography>
        <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" style={{ color: '#FF585D' }} />
        <Typography>
          <InfoOutlinedIcon fontSize="small" style={{ color: '#FF585D' }} /> Din max liggeitd
        </Typography>
        <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" style={{ color: '#FF585D' }} />
      </Grid>
    </div>
  )
}
