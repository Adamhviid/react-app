import React, { useState } from 'react';
import { Collapse, Grid, Slider, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

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
      <Typography variant="h" component="h" onClick={toggleCollapse} style={{ cursor: 'pointer' }}>
        {open ?
          <>{('Hjælp til at prissætte din bolig')} <ExpandLessIcon fontSize="large" /></> :
          <>{('Hjælp til at prissætte din bolig')} <ExpandMoreIcon fontSize="large" /></>
        }
      </Typography>
      <Collapse in={open} style={{ borderStyle: 'groove', padding: '10px' }}>

        <Typography>
          tekst om at hjælpe med at sætte prisen :)
        </Typography>


        {/* <Grid container spacing={6}>
          <Grid item xs={6}>
            <Grid item xs={12}>
              <Typography className={classes.subHeader}>
                {('Sæt den rigtige pris på din bolig')} <PlayCircleFilledWhiteOutlinedIcon fontSize="small" style={{ color: '#FF585D' }} />
              </Typography>
              <Typography>
                {('Lang tekst herLang tekst herLang tekst herLang tekst herLang tekst herLang tekst herLang tekst herLang tekst herLang tekst her')}
              </Typography>
              <br/>
            </Grid>
            <Grid container spacing={12}>
              <Grid item xs={6} style={{ textAlign: 'center' }}>
                <Typography className={classes.subHeader}>
                  {('WeBrick boligskøn')} <InfoOutlinedIcon fontSize="small" style={{ color: '#FF585D' }} />
                </Typography>
                <Typography className={classes.prices}>
                  200.000
                </Typography>
              </Grid>
              <Grid item xs={6} style={{ textAlign: 'center' }}>
                <Typography className={classes.subHeader}>
                  {('Kommunens gns- m2 pris')} <InfoOutlinedIcon fontSize="small" style={{ color: '#FF585D' }} />
                </Typography>
                <Typography className={classes.prices}>
                  200
                </Typography>
              </Grid>
            </Grid>
            <Grid items cs={12}>
              <Typography className={classes.subHeader}>
                {('my-properties:toolCalculateHousingValue')}
              </Typography>
              <Typography >
                {('my-properties:toolChangeCriteria')}
              </Typography>
              <Typography>
                <InfoOutlinedIcon fontSize="small" style={{ color: '#FF585D' }} /> {('Din minimums pris')}
              </Typography>
              <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" style={{ color: '#FF585D' }} />
              <Typography>
                <InfoOutlinedIcon fontSize="small" style={{ color: '#FF585D' }} /> {('Din max liggeitd')}
              </Typography>
              <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" style={{ color: '#FF585D' }} />
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid item xs={12}>
              <Typography className={classes.subHeader}>
                {('my-properties:toolPreviouslySoldHousing')}
              </Typography>
              <Typography className={classes.subHeader}>
                {('my-properties:toolHousingOnSale')}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography className={classes.subHeader}>
                {('my-properies:toolHousingHistory')} <InfoOutlinedIcon fontSize="small" style={{ color: '#FF585D' }} />
              </Typography>
            </Grid>
          </Grid>
        </Grid> */}
      </Collapse>
    </div>
  )
};

export default (PriceTool);



