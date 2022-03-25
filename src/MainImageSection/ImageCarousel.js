import React, { useState } from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Button, Grid } from '@mui/material';
/* import LikeIcon from './ImageLike/LikeIcon'; */
import LikeIcon2 from './ImageLike/LikeIcon/LikeIcon2'
import UseLike from './ImageLike/LikeIcon/UseLike';
import InfoBox from '../Layout/InfoBox';

import house from '../HouseStockImages/house.jpeg'
import bathroom from '../HouseStockImages/bathroom.jpeg'
import livingroom from '../HouseStockImages/livingroom.jpeg'
import office from '../HouseStockImages/office.jpeg'
import tv from '../HouseStockImages/tv.jpeg'

const items = [
  <img className="item" src={house} width="100%"></img>,
  <img className="item" src={bathroom} width="100%" ></img>,
  <img className="item" src={livingroom} width="100%" ></img>,
  <img className="item" src={office} width="100%" ></img>,
  <img className="item" src={tv} width="100%" ></img>
];

const thumbItems = (items, [setThumbIndex, setThumbAnimation]) => {
  return items.map((item, i) => (

    <div className="thumb"
      style={{ width: '250px', height: '200px', padding: '15px' }}
      onClick={() => (setThumbIndex(i), setThumbAnimation(true))}
    >

      <InfoBox>
        <LikeIcon2
          variant="contained"
          color="secondary"
          onClick={() => (
            <UseLike item={item} />
          )}>
          {item}
        </LikeIcon2>
      </InfoBox>
    </div >
  ));
};

const ImageCarousel = () => {
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
        <div className="thumbs" style={{ paddingTop: '30px', textAlign: 'center' }}>
          <AliceCarousel
            activeIndex={thumbIndex}
            autoWidth
            disableButtonsControls
            items={thumbs}
            mouseTracking={false}
            onSlideChanged={syncThumbs}
            touchTracking={!mainAnimation}
          />
          <Button variant="contained" style={{ background: '#FF585D', padding: '5px', color: '#fff' }} onClick={slidePrev}>Prev</Button>
          <Button variant="contained" style={{ background: '#FF585D', padding: '5px', color: '#fff' }} onClick={slideNext}>Next</Button>
        </div>
      </Grid>
    </div >
  )
}

export default ImageCarousel