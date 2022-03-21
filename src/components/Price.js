import React, { useState, useEffect } from 'react';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

function Price() {
    const [open, setOpen] = React.useState(false);
    const [price, setPrice] = useState(() => {
        const saved = localStorage.getItem("price");
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
        localStorage.setItem("price", JSON.stringify(price));
    }, [price])

    return (
        <div>
            <h1>Sæt Prisen</h1>
            <div style={{ textAlign: 'center', borderStyle: 'groove', padding: '10px' }}>
                <h2>Boligens pris</h2>
                <h1 style={{ color: '#FF585D', fontWeight: 'bold' }}>kr. {price},-</h1>
                <Button variant="contained" onClick={handleClickOpen} style={{ backgroundColor: '#FF585D' }}>
                    Ændre pris
                </Button>
                <Dialog id="favDialog" open={open} onClose={handleClose}>
                    <DialogTitle>Ændr pris</DialogTitle>
                    <DialogContent>
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
                        <Button onClick={handleClose}>Godkend</Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    )
}

export default Price;