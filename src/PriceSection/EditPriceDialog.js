import React, { useState, useEffect } from 'react';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import InfoBox from '../Layout/InfoBox'
import PropTypes from 'prop-types'

const EditPriceDialog = props => {
  const {
    show,
    price,
    confirm
  } = props
  const [newPrice, setNewPrice] = useState(price)

  useEffect(() => {
    localStorage.setItem("price", JSON.stringify(newPrice));
  }, [newPrice])

  if (!show) {
    return <></>;
  }

  return (
    <div>
      <Dialog open={show}>
        <InfoBox hasPadding>
          <DialogTitle>Ændr prisen på din bolig</DialogTitle>
          <hr />
          <DialogContent>
            <TextField
              autoFocus
              value={newPrice}
              margin="dense"
              type="text"
              fullWidth
              onChange={({ target: { value } }) => {
                setNewPrice(value);
              }}
              onBlur={confirm}
            />
          </DialogContent>
          <DialogActions>
            <Button variant="contained" onClick={confirm} style={{ background: '#FF585D', padding: '5px', color: '#fff' }}>Godkend</Button>
          </DialogActions>
        </InfoBox>
      </Dialog>
    </div>
  )
}
EditPriceDialog.propTypes = {
  show: PropTypes.bool,
  price: PropTypes.string,
  confirm: PropTypes.func
}

export default EditPriceDialog
