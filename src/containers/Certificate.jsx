import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Container,
  Fade,
} from "reactstrap";

const items = [
  {
    src: "/Azure.jpg",
    altText: "",
    caption: "",
  },
  {
    src: "/Devops.jpg",
    altText: "",
    caption: "",
  },
  {
    src: "/Guvi.png",
    altText: "",
    caption: "",
  },
  {
    src: "/Javascript.jpg",
    altText: "",
    caption: "",
  },
  {
    src: "/React.jpg",
    altText: "",
    caption: "",
  },
];

const Certificate = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img className="d-block w-100" src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <section className="section section-lg">
      <Container>
        <Fade bottom duration={1000} distance="40px">
          <div className="d-flex p-4">
            <div>
              <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                <i className="fa fa-file text-info" />
              </div>
            </div>
            <div className="pl-4">
              <h4 className="display-3 text-info">Certificates</h4>
            </div>
          </div>
          <br />
          <Carousel activeIndex={activeIndex} next={next} previous={previous}>
            <CarouselIndicators
              items={items}
              activeIndex={activeIndex}
              onClickHandler={goToIndex}
            />
            {slides}
            <CarouselControl
              direction="prev"
              directionText="Previous"
              onClickHandler={previous}
            />
            <CarouselControl
              direction="next"
              directionText="Next"
              onClickHandler={next}
            />
          </Carousel>
        </Fade>
      </Container>
    </section>
  );
};

export default Certificate;
