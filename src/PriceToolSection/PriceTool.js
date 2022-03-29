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
  infoboxHeader: {
    fontWeight: "bold",
    paddingTop: '2.5rem',
    fontSize: "2.5em",
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
      <p className={classes.infoboxHeader} onClick={toggleCollapse}>
        {open ?
          <>{('Hjælp til at prissætte din bolig')} <ExpandLessIcon fontSize="large" /></> :
          <>{('Hjælp til at prissætte din bolig')} <ExpandMoreIcon fontSize="large" /></>
        }
      </p>
      <Collapse in={open}>
        <InfoBox hasPadding>
          <Grid container spacing={3}>
            <Grid item md={6}>
              <Grid item md={12}>
                <p>HEJ test</p>
              </Grid>
            </Grid>
            <Grid item md={6}>
              <p>Tidligere solgte boliger</p>
              <Grid container item md={12}>
                {items.slice(0, 3).map(function (src, key) {
                  return <HouseCards
                    image={src}
                    text={"Sankt thomas alle 2"}
                    price={key} />
                })}
              </Grid>

              <p>Nuværende boliger til salg</p>
              <Grid container item md={12}>
                {items.slice(2, 5).map(function (src, key) {
                  return <HouseCards
                    image={src}
                    text={"Sankt thomas alle 4"}
                    price={key} />
                })}
              </Grid>
            </Grid>
          </Grid>
        </InfoBox>
      </Collapse>
    </div>
  )
};

export default (PriceTool);



