import React, { useState } from 'react';
import { Collapse, Grid } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import InfoBox from '../Layout/InfoBox'
import HouseCards from './HouseCards';
import PriceToolIntroduction from './PriceToolIntroduction';
import WeBrickBoligskøn from './WeBrickBoligskøn';
import KommuneStatistics from './KommuneStatistics';

import house from '../MainImageSection/HouseStockImages/house.jpeg'
import bathroom from '../MainImageSection/HouseStockImages/bathroom.jpeg'
import livingroom from '../MainImageSection/HouseStockImages/livingroom.jpeg'
import office from '../MainImageSection/HouseStockImages/office.jpeg'
import tv from '../MainImageSection/HouseStockImages/tv.jpeg'

const houses = [{
  image: <img className="item" src={house} width="100%"></img>,
  address: "sankt thomas alle 1",
  price: "kr 1.000.000 ,-",
  onMarketDays: "120 dage"
},
{
  image: <img className="item" src={bathroom} width="100%"></img>,
  address: "sankt thomas alle 1",
  price: "kr 1.000.000 ,-",
  onMarketDays: "320 dage"
},
{
  image: <img className="item" src={livingroom} width="100%"></img>,
  address: "sankt thomas alle 1",
  price: "kr 1.000.000 ,-",
  onMarketDays: "131 dage"
},
{
  image: <img className="item" src={office} width="100%"></img>,
  address: "sankt thomas alle 1",
  price: "kr 1.000.000 ,-",
  onMarketDays: "12 dage"
},
{
  image: <img className="item" src={tv} width="100%"></img>,
  address: "sankt thomas alle 1",
  price: "kr 1.000.000 ,-",
  onMarketDays: "1120 dage"
}];

const useStyles = makeStyles({
  infoboxHeader: {
    fontWeight: "bold",
    fontSize: "2.5em",
  },
  centerGridElement: {
    justifyContent: 'center',
    textAlign: 'center'
  }
})

const PriceTool = () => {
  const classes = useStyles();
  const [open, setIsOpen] = useState(false);

  const toggleCollapse = e => {
    e.preventDefault();
    setIsOpen((current) => !current);
  };

  const boligskøn = "kr. 2.145.00 ,-"
  const numberOfHouses = "166"
  const avgSquareMeterPrice = "50.100 ,-"
  const avgSaletime = "180 dage"
  const avgPrisnedslag = "1.59%"

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
                <PriceToolIntroduction />
              </Grid>
              <Grid item xs={12} md={6} className={classes.centerGridElement}>
                <WeBrickBoligskøn boligskøn={boligskøn} />
              </Grid>
              <Grid item xs={12} md={6} className={classes.centerGridElement}>
                <WeBrickBoligskøn boligskøn={boligskøn} />
              </Grid>
              <h3>Boligstatstik i kommunen</h3>
              <Grid item md={12} className={classes.centerGridElement}>
                <KommuneStatistics
                  numberOfHouses={numberOfHouses}
                  avgSquareMeterPrice={avgSquareMeterPrice}
                  avgSaletime={avgSaletime}
                  avgPrisnedslag={avgPrisnedslag}
                />
              </Grid>
            </Grid>
            <Grid item md={6} >
              <h3>Tidligere solgte boliger</h3>
              <Grid container item md={12} className={classes.centerGridElement}>
                {houses.slice(0, 3).map(function (house) {
                  return <HouseCards
                    image={house.image}
                    address={house.address}
                    price={house.price}
                    onMarketDays={"liggetid: " + house.onMarketDays} />
                })}
              </Grid>

              <h3>Nuværende boliger til salg</h3>
              <Grid container item md={12} className={classes.centerGridElement}>
                {houses.slice(2, 5).map(function (house) {
                  return <HouseCards
                    image={house.image}
                    address={house.address}
                    price={house.price}
                    onMarketDays={"liggetid: " + house.onMarketDays} />
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



