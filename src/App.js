import React from 'react';
import { Grid } from '@mui/material';
import Price from './PriceSection/Price'
import PriceTool from './PriceToolSection/PriceTool';
import Header from './components/Header';
import Footer from './components/Footer'
import About from './components/About';
import ImageCarousel from './MainImageSection/ImageCarousel';
import PropertyData from './components/PropertyData';
import Weather from './Weather/Weather';
import Address from './components/Address';
import Section from './Layout/Section';
/* import LikedImage from './MainImageSection/ImageLike/LikedImage'; */

function App() {
  return (
    <div className="App" >
      <Header />
      <Section>
        <Grid container spacing={3}>
          <Grid item xs={12} md={9}>
            <Address />
          </Grid>
          <Grid item xs={12}>
            <ImageCarousel />
          </Grid>
          <Grid item xs={12}>
            <Price />
          </Grid>
          <Grid item xs={12}>
            <PriceTool />
          </Grid>
          <Grid item xs={12} md={6}>
            <About />
          </Grid>
          <Grid item xs={12} md={3}>
            <Weather />
          </Grid>
          <Grid item xs={12} md={3}>
            <PropertyData />
          </Grid>
        </Grid>
        <Footer />
      </Section>

    </div >
  );
}

export default App;
