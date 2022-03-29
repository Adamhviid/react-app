import React, { useState } from 'react';
import { Collapse, Grid, Slider, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import InfoBox from '../Layout/InfoBox'
import HouseCards from './HouseCards';

import house from '../MainImageSection/HouseStockImages/house.jpeg'
import bathroom from '../MainImageSection/HouseStockImages/bathroom.jpeg'
import livingroom from '../MainImageSection/HouseStockImages/livingroom.jpeg'
import office from '../MainImageSection/HouseStockImages/office.jpeg'
import tv from '../MainImageSection/HouseStockImages/tv.jpeg'

const items = [
<img className="item" src={house} width="100%"></img>,
  <img className="item" src={bathroom} width="100%" ></img>,
  <img className="item" src={livingroom} width="100%" ></img>,
  <img className="item" src={office} width="100%" ></img>,
  <img className="item" src={tv} width="100%" ></img>
];

const useStyles = makeStyles({
  infoBoxHeader: {
    fontWeight: 'bold',
    color: '#000',
    lineHeight: 2,
    paddingTop: '2rem',
  },
  subHeader: {
    color: '#000',
    fontSize: '1.2rem'
  },
  prices: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: '1.5rem'
  },
})

const PriceTool = () => {
  const classes = useStyles();
  const [open, setIsOpen] = useState(false);

  const toggleCollapse = e => {
    e.preventDefault();
    setIsOpen((current) => !current);
  };

  return (
    <div>
      <Typography onClick={toggleCollapse} variant="h4" component="h1" style={{ fontWeight: 'bold', color: '#000', cursor: 'pointer' }}>
        {open ?
          <>{('Hjælp til at prissætte din bolig')} <ExpandLessIcon fontSize="large" /></> :
          <>{('Hjælp til at prissætte din bolig')} <ExpandMoreIcon fontSize="large" /></>
        }
      </Typography>
      <Collapse in={open}>
        <InfoBox hasPadding>
          <Grid container spacing={3}>

            <Grid item md={5}>
              <Grid item md={12}>
                <p>HEJ test</p>
              </Grid>
            </Grid>
            <Grid item md={7}>
              <p>Tidligere solgte boliger</p>
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                item md={12}>
                <HouseCards
                  image={items[0]}
                  text={"Sankt thomas alle 1"}
                  price={"200.000kr"}
                />
                <HouseCards
                  image={items[1]}
                  text={"Sankt thomas alle 2"}
                  price={"330.995kr"}
                />
                <HouseCards
                  image={items[2]}
                  text={"Sankt thomas alle 3"}
                  price={"1.000.000kr"}
                />
              </Grid>
              <p>Nuværende boliger til salg</p>
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                item md={12}>
                <HouseCards
                  image={items[0]}
                  text={"Sankt thomas alle 1"}
                  price={"200.000kr"}
                />
                <HouseCards
                  image={items[1]}
                  text={"Sankt thomas alle 2"}
                  price={"330.995kr"}
                />
                <HouseCards
                  image={items[2]}
                  text={"Sankt thomas alle 3"}
                  price={"1.000.000kr"}
                />
              </Grid>
            </Grid>
          </Grid>
        </InfoBox>
      </Collapse>
    </div>
  )
};

export default (PriceTool);



