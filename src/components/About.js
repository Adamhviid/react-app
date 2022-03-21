import React, { useState, useEffect } from 'react'
import { TextField, Box, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

function About() {

  const [open, setOpen] = React.useState(false);
  const [name, setName] = useState(() => {
    const saved = localStorage.getItem("name");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  })
  const [description, setDescription] = useState(() => {
    const saved = localStorage.getItem("description");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  })

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(name));
    localStorage.setItem("description", JSON.stringify(description));
  }, [name, description]);

  return (
    <div style={{ textAlign: 'right' }}>
      <h2>Hej lidt om mig</h2>
      <div style={{ borderStyle: 'groove', padding: '10px' }}>
        <h2>{name}</h2>
        <hr />
        <p>{description}</p>
      </div>
      <Button variant="contained" onClick={handleClickOpen} style={{ backgroundColor: '#FF585D' }}>
        Ændr information
      </Button>
      <Dialog id="favDialog" open={open} onClose={handleClose}>
        <DialogTitle>Ændr information</DialogTitle>
        <DialogContent>
          <Box
            component="form"
            noValidate
            autoComplete="off"
            width={500}
            height={400}
          >
            <p>Dit fulde navn</p>
            <TextField
              fullWidth
              value={name}
              onChange={({ target: { value } }) => {
                setName(value);
              }}
            />
            <p>Beskriv lidt om dig selv</p>
            <TextField
              fullWidth
              multiline
              rows={10}
              value={description}
              onChange={({ target: { value } }) => {
                setDescription(value);
              }}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} type='submit' variant="contained" style={{ float: 'right', backgroundColor: '#FF585D' }}>Gem</Button>
        </DialogActions>
      </Dialog>

    </div >
  )
}

export default About