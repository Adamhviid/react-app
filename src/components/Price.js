import React, { useState, useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Typography, Grid } from '@mui/material';
import InfoBox from '../Layout/InfoBox'

const useStyles = makeStyles(theme => ({
  Button: {
    background: '#FF585D',
    padding: '5px',
    color: '#fff'
  },
}));

function Price() {
  const [open, setOpen] = React.useState(false);
  const [price, setPrice] = useState(() => {
    const saved = localStorage.getItem("price");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  })
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    localStorage.setItem("price", JSON.stringify(price));
  }, [price])

  return (
    <div>
      <Typography variant="h4" component="h1" style={{ fontWeight: 'bold', color: '#000' }}>
        Sæt prisen
      </Typography>
      <InfoBox hasPadding>
        <Grid style={{ textAlign: 'center' }}>
          <Typography variant="h4" component="h1" style={{ fontWeight: 'bold', color: '#000' }}>
            Boligens pris
          </Typography>
          <h1 style={{ color: '#FF585D', fontWeight: 'bold', fontSize: '3em' }}>kr. {price},-</h1>
          <Button variant="contained" onClick={handleClickOpen} style={{ background: '#FF585D', padding: '5px', color: '#fff' }}>
            Ændre pris
          </Button>
          <Dialog id="favDialog" open={open} onClose={handleClose}>
            <InfoBox hasPadding>
              <Button>X</Button><DialogTitle>Ændr prisen på din bolig</DialogTitle>
              <DialogContent>
                <hr />
                <TextField
                  autoFocus
                  value={price}
                  margin="dense"
                  type="text"
                  fullWidth
                  onChange={({ target: { value } }) => {
                    setPrice(value);
                  }}
                />
              </DialogContent>
              <DialogActions>
                <Button variant="contained" onClick={handleClose} style={{ background: '#FF585D', padding: '5px', color: '#fff' }}>Godkend</Button>
              </DialogActions>
            </InfoBox>
          </Dialog>
        </Grid>
      </InfoBox >
    </div >
  )
}

export default (Price);