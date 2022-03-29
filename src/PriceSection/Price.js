import React, { useState, useEffect } from 'react';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Typography, Grid } from '@mui/material';
import InfoBox from '../Layout/InfoBox'
import EditPriceDialog from './EditPriceDialog';

import classes from './PriceSection.module.css'

function Price() {
  const [showDialog, setShowDialog] = useState(false);
  const [price, setPrice] = useState(() => {
    const saved = localStorage.getItem("price");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  })

  const confirm = () => {
    const saved = localStorage.getItem("price");
    const initialValue = JSON.parse(saved);
    setPrice(initialValue)
    setShowDialog(false)
  }

  useEffect(() => {
    localStorage.setItem("price", JSON.stringify(price));
  }, [price])

  return (
    <div>
      <p className={classes.infoboxTitle}>
        Sæt prisen
      </p>
      <InfoBox hasPadding>
        <Grid style={{ textAlign: 'center' }}>
          <Typography variant="h4" component="h1" style={{ fontWeight: 'bold', color: '#000' }}>
            Boligens pris
          </Typography>
          <h1 style={{ color: '#FF585D', fontWeight: 'bold', fontSize: '3em' }}>
            kr. {price},-
          </h1>
          <Button
            variant="contained"
            onClick={() => { setShowDialog(true) }}
            style={{ background: '#FF585D', padding: '5px', color: '#fff' }}
          >
            Ændre pris
          </Button>

          <EditPriceDialog
            show={showDialog}
            price={price}
            confirm={confirm}
          />
        </Grid>
      </InfoBox>
    </div>
  )
}

export default (Price);