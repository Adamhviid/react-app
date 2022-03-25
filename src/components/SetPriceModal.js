import React from 'react'
import PropTypes from 'prop-types'
import { Button, TextField, Dialog, DialogActions, Modal, DialogContent, DialogTitle, Typography, Grid } from '@mui/material';

const SetPriceModal = props => {

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog show={props.isOpen}>
        <InfoBox hasPadding>
          <>Ændr prisen på din bolig</>
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
            <Button variant="contained" onClick={props.toggle} style={{ background: '#FF585D', padding: '5px', color: '#fff' }}>Godkend</Button>
          </DialogActions>
        </InfoBox>
      </Dialog>
    </div>
  )
}

SetPriceModal.propTypes = {}

export default SetPriceModal