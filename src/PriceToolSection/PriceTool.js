import React, { useState } from 'react';
import { Collapse, Grid, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import InfoBox from '../Layout/InfoBox'
import HouseCards from './HouseCards';
import PriceToolIntroduction from './PriceToolIntroduction';
import WeBrickBoligskøn from './WeBrickBoligskøn';
import KommuneStatistics from './KommuneStatistics';
import PriceToolSliders from './PriceToolSliders';

import house from '../MainImageSection/HouseStockImages/house.jpeg'
import bathroom from '../MainImageSection/HouseStockImages/bathroom.jpeg'
import livingroom from '../MainImageSection/HouseStockImages/livingroom.jpeg'
import office from '../MainImageSection/HouseStockImages/office.jpeg'
import tv from '../MainImageSection/HouseStockImages/tv.jpeg'

const houses = [{
  image: <img className="item" src={house} width="100%"></img>,
  address: "sankt thomas alle 1",
  askingPrice: "kr 1.000.000 ,-",
  actualprice: "kr 950.00 ,-",
  onMarketDays: "120 dage"
},
{
  image: <img className="item" src={bathroom} width="100%"></img>,
  address: "sankt thomas alle 1",
  askingPrice: "kr 1.000.000 ,-",
  actualprice: "kr 950.00 ,-",
  onMarketDays: "320 dage"
},
{
  image: <img className="item" src={livingroom} width="100%"></img>,
  address: "sankt thomas alle 1",
  askingPrice: "kr 1.000.000 ,-",
  actualprice: "kr 950.00 ,-",
  onMarketDays: "131 dage"
},
{
  image: <img className="item" src={office} width="100%"></img>,
  address: "sankt thomas alle 1",
  askingPrice: "kr 1.000.000 ,-",
  actualprice: "kr 950.00 ,-",
  onMarketDays: "12 dage"
},
{
  image: <img className="item" src={tv} width="100%"></img>,
  address: "sankt thomas alle 1",
  askingPrice: "kr 1.000.000 ,-",
  actualprice: "kr 950.00 ,-",
  onMarketDays: "1120 dage"
}];

const useStyles = makeStyles({
  infoboxHeader: {
    fontWeight: "bold",
    fontSize: "2.5em",

    '&:hover': {
      cursor: 'pointer'
    }
  },
  centerGridElements: {
    justifyContent: 'center',
    textAlign: 'center',
  },
  subheader: {
    paddingTop: '20px',
    paddingBottom: '5px',
    fontSize: '1.5em'
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
              <Typography className={classes.subheader}>
                Sæt den rigtige pris på din bolig
              </Typography>
              <Grid item md={12}>
                <PriceToolIntroduction />
              </Grid>
              <Grid item xs={12} md={6} className={classes.centerGridElements}>
                <WeBrickBoligskøn boligskøn={boligskøn} />
              </Grid>
              <Grid item xs={12} md={6} className={classes.centerGridElements}>
                <WeBrickBoligskøn boligskøn={boligskøn} />
              </Grid>
              <Typography className={classes.subheader}>
                Beregn boligens værdi
              </Typography>
              <Grid item md={12}>
                <PriceToolSliders />
              </Grid>
              <Typography className={classes.subheader}>
                Boligstatstik i kommunen
              </Typography>
              <Grid item md={12} className={classes.centerGridElements}>
                <KommuneStatistics
                  numberOfHouses={numberOfHouses}
                  avgSquareMeterPrice={avgSquareMeterPrice}
                  avgSaletime={avgSaletime}
                  avgPrisnedslag={avgPrisnedslag}
                />
              </Grid>
            </Grid>
            <Grid item md={6} >
              <Typography className={classes.subheader}>
                Tidligere solgte boliger
              </Typography>
              <Grid container item md={12} className={classes.centerGridElements}>
                {houses.slice(0, 3).map(function (house) {
                  return <HouseCards
                    image={house.image}
                    address={house.address}
                    askingPrice={house.askingPrice}
                    actualprice={house.actualprice}
                    onMarketDays={house.onMarketDays} />
                })}
              </Grid>

              <Typography className={classes.subheader}>
                Nuværende boliger til salg
              </Typography>
              <Grid container item md={12} className={classes.centerGridElements}>
                {houses.slice(2, 5).map(function (house) {
                  return <HouseCards
                    image={house.image}
                    address={house.address}
                    askingPrice={house.askingPrice}
                    actualprice={null}
                    onMarketDays={house.onMarketDays} />
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



