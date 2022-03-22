import React, { useState, useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

const useStyles = makeStyles(theme => ({
  infobox: {
    textAlign: 'center',
    borderStyle: 'groove',
    padding: '10px'
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
      <h1>Sæt Prisen</h1>
      <div className={classes.infobox}>
        <h2>Boligens pris</h2>
        <h1 style={{ color: '#FF585D', fontWeight: 'bold', fontSize: '3em' }}>kr. {price},-</h1>
        <Button variant="contained" onClick={handleClickOpen} style={{ backgroundColor: '#FF585D' }}>
          Ændre pris
        </Button>
        <Dialog id="favDialog" open={open} onClose={handleClose}>
          <DialogTitle>Ændr prisen på din bolig</DialogTitle>
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
            <Button variant="contained" onClick={handleClose} style={{ background: '#FF585D' }}>Godkend</Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  )
}

export default (Price);