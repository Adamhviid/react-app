import React, { useState } from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Button } from '@mui/material';

import house from '../images/house.jpeg'
import bathroom from '../images/bathroom.jpeg'
import livingroom from '../images/livingroom.jpeg'
import office from '../images/office.jpeg'
import tv from '../images/tv.jpeg'

const items = [
  <img className="item" data-value="1" src={house} width="100%"></img>,
  <img className="item" data-value="2" src={bathroom} width="100%" ></img>,
  <img className="item" data-value="3" src={livingroom} width="100%" ></img>,
  <img className="item" data-value="4" src={office} width="100%" ></img>,
  <img className="item" data-value="5" src={tv} width="100%" ></img>
];
const thumbItems = (items, [setThumbIndex, setThumbAnimation]) => {
  return items.map((item, i) => (
    <div className="thumb" style={{ width: '300px', height: 'auto', paddingRight: '50px' }} onClick={() => (setThumbIndex(i), setThumbAnimation(true))}>
      {item}
    </div>
  ));
};

const Carousel = () => {
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
    <div style={{ width: '100%' }}>
      <AliceCarousel
        activeIndex={mainIndex}
        animationType="fadeout"
        animationDuration={800}
        disableDotsControls
        disableButtonsControls
        infinite
        items={items}
        mouseTracking={!thumbAnimation}
        onSlideChange={syncMainBeforeChange}
        onSlideChanged={syncMainAfterChange}
        touchTracking={!thumbAnimation}
      />
      <div className="thumbs" style={{ textAlign: 'center', padding: '30px' }}>
        <AliceCarousel
          activeIndex={thumbIndex}
          autoWidth
          disableButtonsControls
          items={thumbs}
          mouseTracking={false}
          onSlideChanged={syncThumbs}
          touchTracking={!mainAnimation}
        />
        <Button variant="contained" style={{ backgroundColor: '#FF585D' }} onClick={slidePrev}>Prev</Button>
        <Button variant="contained" style={{ backgroundColor: '#FF585D' }} onClick={slideNext}>Next</Button>
      </div>
    </div >
  )
}

export default Carousel