import React from 'react';
import { Grid } from '@mui/material';
import Price from './components/Price'
import PriceTool from './components/PriceTool';
import Header from './components/Header';
import About from './components/About';
import ImageCarousel from './ImageSection/ImageCarousel';
import PropertyData from './components/PropertyData';
import Weather from './Weather/Weather';

function App() {
  return (
    <div className="App" >
      <Header />
      <Grid container spacing={6} style={{ padding: '50px' }}>
        <Grid item xs={12}>
          <ImageCarousel />
        </Grid>
        <Grid item xs={12}>
          <Price />
        </Grid>
        <Grid item xs={12}>
          <PriceTool />
        </Grid>
        <Grid item md={6} xs={12}>
          <About />
        </Grid>
        <Grid item md={3} xs={12}>
          <PropertyData />
        </Grid>
        <Grid item md={3} xs={12}>
          <Weather />
        </Grid>
      </Grid>
    </div >
  );
}

export default App;
