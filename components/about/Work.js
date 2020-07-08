import Swiper from "react-id-swiper";
import { useEffect, useState, useRef } from "react";

import { SlideUp } from "components/animations";

import Link from "components/Link";

const Slide = ({ image }) => (
  <div className="swiper-slide">
    <figure
      className="bgc-grey"
      style={{ paddingBottom: (image.height / image.width) * 100 + "%" }}
    >
      <img src={image.url} alt={image.alt} />
    </figure>

    <style jsx>{`
      .swiper-slide {
        overflow: hidden;
      }

      figure {
        height: 0;
        position: relative;
        width: 100%;
      }

      img {
        position: absolute;
        top: 0;
        left: 0%;
        height: 100%;
        width: 100%;
        object-position: center;
        object-fit: contain;
      }
    `}</style>
  </div>
);

const SlideShow = ({
  set,
  slidesPerView,
  spaceBetween,
  speed,
  i,
  centred = false,
}) => {
  const ref = useRef(null);
  const [runningInterval, setRunningInterval] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      let interval = setInterval(slideNext, 4000);
      setRunningInterval(interval);

      slideNext();
    }, 1000);

    return () => {
      clearInterval(runningInterval);
    };
  }, []);

  const slideNext = () => {
    if (ref && ref.current && ref.current.swiper) {
      ref.current.swiper.slideNext();
    }
  };

  const params = {
    slidesPerView,
    spaceBetween,
    speed,
    centeredMode: centred,
    loop: true,
  };

  return (
    <div className={i}>
      <Swiper ref={ref} {...params}>
        {set.map((img, index) => (
          <Slide image={img} key={i + index} />
        ))}
      </Swiper>

      <style jsx>{`
        div {
          pointer-events: none;
        }
      `}</style>
    </div>
  );
};

const Work = ({ work }) => {
  const { images, text } = work;

  const swiperRefOne = useRef(null);
  const swiperRefTwo = useRef(null);
  const swiperRefThree = useRef(null);

  const [setOne, defineSetOne] = useState(null);
  const [setTwo, defineSetTwo] = useState(null);
  const [setThree, defineSetThree] = useState(null);

  useEffect(() => {
    let tempStateOne = [];
    let tempStateTwo = [];
    let tempStateThree = [];
    images.map((img, i) => {
      if (i % 3 === 0) tempStateOne.push(img);
      else if (i % 3 === 1) tempStateTwo.push(img);
      else if (i % 3 === 2) tempStateThree.push(img);
    });

    defineSetOne(tempStateOne);
    defineSetTwo(tempStateTwo);
    defineSetThree(tempStateThree);
  }, [images]);

  // const paramsOne = {
  //   slidesPerView: 2.45,
  //   spaceBetween: "33%",
  //   speed: 600,
  //   autoplay: {
  //     waitForTransition: false,
  //   },
  //   autoPlay: true,
  //   loop: true,
  // };
  // const paramsTwo = {
  //   slidesPerView: 3,
  //   spaceBetween: "30.66%",
  //   speed: 400,
  //   loop: true,
  // };
  // const paramsThree = {
  //   slidesPerView: 1.788,
  //   speed: 900,
  //   spaceBetween: "20%",
  //   loop: true,
  // };

  return (
    <>
      <section className="intro-text mxa mw-small main-text">
        <SlideUp>
          <span dangerouslySetInnerHTML={{ __html: text }} />
          <Link href="/work">View Work</Link>
        </SlideUp>

        <style jsx>{`
          section {
            padding: calc(var(--gutter-medium) * 3) var(--gutter);
            padding-bottom: var(--gutter-medium);
          }
        `}</style>
      </section>

      <section className="work-carousel">
        {setOne && (
          <SlideShow
            set={setOne}
            i="one"
            slidesPerView={2.3}
            spaceBetween="33.33%"
            speed={3600}
          />
        )}
        {setTwo && (
          <SlideShow
            set={setTwo}
            i="two"
            centred
            slidesPerView={3}
            spaceBetween="30.3555%"
            speed={3200}
          />
        )}
        {setThree && (
          <SlideShow
            set={setThree}
            i="three"
            slidesPerView={1.78}
            spaceBetween="20%"
            speed={3800}
          />
        )}

        <style jsx global>{`
          .one {
            z-index: 3;
            position: relative;
          }
          .two {
            margin-top: -2vw;
            z-index: 2;
            position: relative;
          }
          .three {
            margin-top: -10vw;
          }

          .work-carousel .swiper-slide {
            transform: translateX(-100px);
          }
        `}</style>
      </section>
    </>
  );
};

export default Work;
