import React, { useState } from 'react'
import { makeStyles } from '@material-ui/styles';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Button, Grid } from '@mui/material';
/* import LikeIcon from './ImageLike/LikeIcon'; */
import LikeIcon from './LikeIcon/LikeIcon'
import UseLike from './LikeIcon/UseLike';
import InfoBox from '../Layout/InfoBox';
import LikedImage from './ImageLike/LikedImage';

import house from './HouseStockImages/house.jpeg'
import bathroom from './HouseStockImages/bathroom.jpeg'
import livingroom from './HouseStockImages/livingroom.jpeg'
import office from './HouseStockImages/office.jpeg'
import tv from './HouseStockImages/tv.jpeg'

const useStyle = makeStyles({
  thumbs: {
    paddingTop: '30px',
    textAlign: 'center'
  },
  buttons: {
    background: '#FF585D',
    padding: '5px',
    color: '#fff',
    '&:hover': {
      background: '#FF585D',
    }
  }
})

const items = [
  <img className="item" src={house} style={{ width: '100%', maxWidth: '1200px' }}></img>,
  <img className="item" src={bathroom} style={{ width: '100%', maxWidth: '1200px' }}></img>,
  <img className="item" src={livingroom} style={{ width: '100%', maxWidth: '1200px' }}></img>,
  <img className="item" src={office} style={{ width: '100%', maxWidth: '1200px' }}></img>,
  <img className="item" src={tv} style={{ width: '100%', maxWidth: '1200px' }}></img>
];

const thumbItems = (items, [setThumbIndex, setThumbAnimation]) => {
  return items.map((item, i) => (
    <div className="thumb"
      style={{ width: '250px', padding: '45px' }}
      onClick={() => (setThumbIndex(i), setThumbAnimation(true))}
    >
      <InfoBox>
        <LikeIcon
          variant="contained"
          color="secondary"
          onClick={() => (
            <UseLike item={item} />
          )}>
          {item}
        </LikeIcon>
      </InfoBox>
    </div>
  ));
};

const ImageCarousel = () => {
  const classes = useStyle()
  const [mainIndex, setMainIndex] = useState(0);
  const [mainAnimation, setMainAnimation] = useState(false);
  const [thumbIndex, setThumbIndex] = useState(0);
  const [thumbAnimation, setThumbAnimation] = useState(false);
  const [thumbs] = useState(thumbItems(items, [setThumbIndex, setThumbAnimation]));

  const slideNext = () => {
    if (!thumbAnimation && thumbIndex < thumbs.length - 1) {
      setThumbAnimation(true);
      setThumbIndex(thumbIndex + 1);
    }
  };

  const slidePrev = () => {
    if (!thumbAnimation && thumbIndex > 0) {
      setThumbAnimation(true);
      setThumbIndex(thumbIndex - 1);
    }
  };

  const syncMainBeforeChange = (e) => {
    setMainAnimation(true);
  };

  const syncMainAfterChange = (e) => {
    setMainAnimation(false);

    if (e.type === 'action') {
      setThumbIndex(e.item);
      setThumbAnimation(false);
    } else {
      setMainIndex(thumbIndex);
    }
  };

  const syncThumbs = (e) => {
    setThumbIndex(e.item);
    setThumbAnimation(false);

    if (!mainAnimation) {
      setMainIndex(e.item);
    }
  };

  return (
    <div>
      <Grid justifyContent="center" alignItems="center">
        <InfoBox>
          <AliceCarousel
            activeIndex={mainIndex}
            animationType="fadeout"
            animationDuration={800}
            disableDotsControls
            disableButtonsControls
            infinite
            responsive={{ items: 1 }}
            items={items}
            mouseTracking={!thumbAnimation}
            onSlideChange={syncMainBeforeChange}
            onSlideChanged={syncMainAfterChange}
            touchTracking={!thumbAnimation}
          />
        </InfoBox>
        <div className={classes.thumbs}>
          <AliceCarousel
            activeIndex={thumbIndex}
            autoWidth
            disableButtonsControls
            items={thumbs}
            mouseTracking={false}
            onSlideChanged={syncThumbs}
            touchTracking={!mainAnimation}
          />
          <Button variant="contained" className={classes.buttons} onClick={slidePrev}>Prev</Button>
          <Button variant="contained" className={classes.buttons} onClick={slideNext}>Next</Button>
        </div>
      </Grid>
      <LikedImage />
    </div >
  )
}

export default ImageCarousel