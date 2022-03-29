import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Button, Typography, Grid } from '@mui/material';
import InfoBox from '../Layout/InfoBox'
import EditPriceDialog from './EditPriceDialog';

const useStyle = makeStyles({
  infoboxHeader: {
    fontWeight: "bold",
    paddingTop: '2.5rem',
    fontSize: "2.5em",
  },
  buttons: {
    background: '#FF585D',
    padding: '5px',
    color: '#fff',
  },
  price: {
    color: '#FF585D',
    fontWeight: 'bold',
    fontSize: '3.5em'
  }
})

function Price() {
  const classes = useStyle()
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

  return (
    <div>
      <p className={classes.infoboxHeader}>
        Sæt prisen
      </p>
      <InfoBox hasPadding>
        <Grid style={{ textAlign: 'center' }}>
          <Typography className={classes.infoboxHeader}>
            Boligens pris
          </Typography>
          <h1 className={classes.price}>
            kr. {price},-
          </h1>
          <Button
            variant="contained"
            onClick={() => { setShowDialog(true) }}
            className={classes.buttons}
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