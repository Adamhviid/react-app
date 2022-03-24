import React, { useState } from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Button, Grid } from '@mui/material';
import LikeImage from '../ImageSection/LikeIcon/LikeIcon';

import house from '../HouseStockImages/house.jpeg'
import bathroom from '../HouseStockImages/bathroom.jpeg'
import livingroom from '../HouseStockImages/livingroom.jpeg'
import office from '../HouseStockImages/office.jpeg'
import tv from '../HouseStockImages/tv.jpeg'

const items = [
  <img className="item" data-value="1" src={house} width="100%"></img>,
  <img className="item" data-value="2" src={bathroom} width="100%" ></img>,
  <img className="item" data-value="3" src={livingroom} width="100%" ></img>,
  <img className="item" data-value="4" src={office} width="100%" ></img>,
  <img className="item" data-value="5" src={tv} width="100%" ></img>
];
const thumbItems = (items, [setThumbIndex, setThumbAnimation]) => {
  return items.map((item, i) => (
    <LikeImage
      cover={false}
      onClick={() => (console.log("Liked: " + { item }))}
    >
      <div className="thumb"
        style={{ width: '300px', height: 'auto', paddingRight: '50px', paddingLeft: '50px' }}
        onClick={() => (setThumbIndex(i), setThumbAnimation(true))}
      >
        {item}
      </div>
    </LikeImage>
  ));
};

const Image = () => {
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
    <div style={{ width: '100%', height: 'auto', textAlign: 'center' }}>
      <Grid justifyContent="center" alignItems="center">
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
        <div className="thumbs" style={{ padding: '30px' }}>

          <AliceCarousel
            activeIndex={thumbIndex}
            
            disableButtonsControls
            infinite
            items={thumbs}
            mouseTracking={false}
            onSlideChanged={syncThumbs}
            touchTracking={!mainAnimation}
          />
          <Button variant="contained" style={{ backgroundColor: '#FF585D' }} onClick={slidePrev}>Prev</Button>
          <Button variant="contained" style={{ backgroundColor: '#FF585D' }} onClick={slideNext}>Next</Button>
        </div>
      </Grid>
    </div >
  )
}

export default Image