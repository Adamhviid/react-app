import React from 'react';
import { Grid } from '@mui/material';
import Price from './components/Price'
import Header from './components/Header';
import About from './components/About';
import Image from './components/Image';
import PropertyData from './components/PropertyData';

function App() {
  return (
    <div className="App">
      <Header />
      <Grid container spacing={6}>
        <Grid item md={12}>
          <Image />
        </Grid>
        <Grid item md={12}>
          <Price />
        </Grid>
        <Grid item md={6} xs={12} style={{ textAlign: 'right' }}>
          <About />
        </Grid>
        <Grid item md={6} xs={12} style={{ textAlign: 'right' }}>
          <PropertyData />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
