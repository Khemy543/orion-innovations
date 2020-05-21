import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
//styles
import "../../assets/css/carousel.css";

const items = [
  {
    src: require('../../assets/img/request.jpg'),
    altText: 'Slide 1',
    caption: 'Website Design'
  },
  {
    src: require('../../assets/img/request1.jpg'),
    altText: 'Slide 2',
    caption: 'Website Renovation and Uprades'
  },
  {
    src: require('../../assets/img/man.jpg'),
    altText: 'Slide 3',
    caption: 'Website Maintenance'
  },
  {
    src: require('../../assets/img/header2.jpg'),
    altText: 'Slide 4',
    caption: 'Webiste Hosting'
  },
 
];

const CarouselView = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
       
      >
      <div className="image-holder">
        <img src={item.src} alt={item.altText} className="image"/>
         
        
      </div> 
        
        <CarouselCaption  captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default CarouselView;