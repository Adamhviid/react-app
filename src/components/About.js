import React, { useState, useEffect } from 'react'
import { TextField, Button, Typography } from '@mui/material';
import InfoBox from '../Layout/InfoBox'

function About() {
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


  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(name));
    localStorage.setItem("description", JSON.stringify(description));
  }, [name, description]);

  return (
    <div>
      <Typography variant="h4" component="h1" style={{ fontWeight: 'bold', color: '#000' }}>
        Hej lidt om mig
      </Typography>

      <InfoBox hasPadding >
        <TextField
          variant="outlined"
          fullWidth
          label="Dit fulde navn"
          value={name}
          onChange={({ target: { value } }) => {
            setName(value);
          }}
          style={{paddingBottom:'20px'}}
        />
        
        <TextField
          variant="outlined"
          fullWidth
          label="Beskriv lidt om dig selv"
          multiline
          rows={10}
          value={description}
          onChange={({ target: { value } }) => {
            setDescription(value);
          }}
        />
      </InfoBox>
      <Button variant="contained" style={{ background: '#FF585D', padding: '5px', marginTop: '10px', color: '#fff', float: 'right' }}>
        Ændr information
      </Button>
    </div >
  )
}

export default About