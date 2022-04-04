import React, { useState } from 'react';
import { Collapse, Grid, Typography, Tooltip, tooltipClasses } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import InfoBox from '../Layout/InfoBox'
import HouseCards from './HouseCards';
import PriceToolIntroduction from './PriceToolIntroduction';
import WeBrickBoligskøn from './WeBrickBoligskøn';
import KommuneStatistics from './KommuneStatistics';
import PriceToolSliders from './PriceToolSliders';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import Section from '../Layout/Section/Section';

import house from '../MainImageSection/HouseStockImages/house.jpeg'
import bathroom from '../MainImageSection/HouseStockImages/bathroom.jpeg'
import livingroom from '../MainImageSection/HouseStockImages/livingroom.jpeg'
import office from '../MainImageSection/HouseStockImages/office.jpeg'
import tv from '../MainImageSection/HouseStockImages/tv.jpeg'

const houses = [{
  image: <img className="item" src={house} width="100%"></img>,
  address: "sankt thomas alle 1",
  askingPrice: "1000000",
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
  topsubheader: {
    paddingBottom: '5px',
    fontSize: '1.5em'
  },
  subheader: {
    paddingTop: '60px',
    paddingBottom: '5px',
    fontSize: '1.5em'
  },
  tooltips: {
    color: '#FF585D',
    paddingLeft: '5px',
  },
})

const PriceTool = () => {
  const classes = useStyles();
  const [open, setIsOpen] = useState(false);

  const toggleCollapse = e => {
    e.preventDefault();
    setIsOpen((current) => !current);
  };

  //mockdata
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
          <Grid container spacing={5}>
            <Grid item md={6}>
              <Typography gutterBottom className={classes.topsubheader}>
                Sæt den rigtige pris på din bolig
                <Tooltip title="Læs mere her :)">
                  <InfoOutlinedIcon className={classes.tooltips} />
                </Tooltip>
              </Typography>
              <Grid item md={12}>
                <PriceToolIntroduction />
              </Grid>
              <Grid container className={classes.subheader}>
                <Grid item xs={12} md={6} className={classes.centerGridElements}>
                  <WeBrickBoligskøn boligskøn={boligskøn} />
                </Grid>
                <Grid item xs={12} md={6} className={classes.centerGridElements}>
                  <WeBrickBoligskøn boligskøn={boligskøn} />
                </Grid>
              </Grid>
              <Typography gutterBottom className={classes.subheader}>
                Beregn boligens værdi
                <Tooltip title="Læs mere her :)">
                  <InfoOutlinedIcon className={classes.tooltips} />
                </Tooltip>
              </Typography>
              <Grid item md={12}>
                <PriceToolSliders price={houses[0].askingPrice} />
              </Grid>
              <Typography gutterBottom className={classes.subheader}>
                Boligstatstik i kommunen
                <Tooltip title="Læs mere her :)">
                  <InfoOutlinedIcon className={classes.tooltips} />
                </Tooltip>
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
              <Typography gutterBottom className={classes.topsubheader}>
                Tidligere solgte boliger
                <Tooltip title="Læs mere her :)">
                  <InfoOutlinedIcon className={classes.tooltips} />
                </Tooltip>
              </Typography>
              <Grid container item md={12} className={classes.centerGridElements}>
                {houses.slice(0, 3).map(function (house) {
                  return <HouseCards
                    image={house.image}
                    address={null}
                    askingPrice={house.askingPrice}
                    actualprice={house.actualprice}
                    onMarketDays={house.onMarketDays} />
                })}
              </Grid>

              <Typography gutterBottom className={classes.subheader}>
                Nuværende boliger til salg
                <Tooltip title="Læs mere her :)">
                  <InfoOutlinedIcon className={classes.tooltips} />
                </Tooltip>
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



