import React from 'react';
import { Grid } from '@mui/material';
import Price from './PriceSection/Price'
import PriceTool from './PriceToolSection/PriceTool';
import Header from './components/Header';
import About from './components/About';
import ImageCarousel from './MainImageSection/ImageCarousel';
import PropertyData from './components/PropertyData';
import Weather from './Weather/Weather';
import LikedImage from './MainImageSection/ImageLike/LikedImage';

function App() {
  return (
    <div className="App" >
      <Header />
      <Grid container spacing={6} style={{ padding: '50px' }}>
        <Grid item xs={12} md={9}>
          <ImageCarousel />
        </Grid>
        <Grid item xs={12} md={3}>
          <Weather />
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
        </Grid>
      </Grid>
    </div >
  );
}

export default App;
