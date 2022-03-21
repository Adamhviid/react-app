import React from 'react';
import { Grid } from '@mui/material';
import Price from './components/Price'
import PriceTool from './components/PriceTool';
import Header from './components/Header';
import About from './components/About';
import Image from './components/Image';
import PropertyData from './components/PropertyData';
import Weather from './components/Weather';

function App() {
  return (
    <div className="App" >
      <Header />
      <Grid container spacing={6} style={{ textal: 'center', padding: '50px' }}>
        <Grid item md={10}>
          <Image />
        </Grid>
        <Grid item md={2} style={{ textAlign: 'center' }}>
          <Weather />
        </Grid>
        <Grid item md={12}>
          <Price />
        </Grid>
        <Grid item md={12}>
          <PriceTool />
        </Grid>
        <Grid item md={6} xs={12}>
          <About />
        </Grid>
        <Grid item md={6} xs={12}>
          <PropertyData />
        </Grid>
      </Grid>
    </div >
  );
}

export default App;
