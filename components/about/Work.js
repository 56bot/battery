import Swiper from "react-id-swiper";
import { useEffect, useState, useRef } from "react";

import { SlideUp } from "components/animations";

import Link from "components/Link";
import Image from "components/Image";

const Slide = ({ image }) => (
  <div className="swiper-slide">
    <img src={image.url} />
    <style jsx>{`
      .swiper-slide {
        overflow: hidden;
      }
    `}</style>
  </div>
);

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
      console.log(img, "IMG!!!");
      if (i % 3 === 0) tempStateOne.push(img);
      else if (i % 3 === 1) tempStateTwo.push(img);
      else if (i % 3 === 2) tempStateThree.push(img);
    });

    defineSetOne(tempStateOne);
    defineSetTwo(tempStateTwo);
    defineSetThree(tempStateThree);
  }, [images]);

  useEffect(() => {
    setTimeout(() => {
      console.log(swiperRefOne.current.swiper);
    }, 1000);
  }, []);

  const paramsOne = {
    slidesPerView: 2.45,
    spaceBetween: "33%",
    speed: 600,
    autoplay: {
      waitForTransition: false,
    },
    autoPlay: true,
    loop: true,
  };
  const paramsTwo = {
    slidesPerView: 3,
    spaceBetween: "30.66%",
    speed: 400,
    loop: true,
  };
  const paramsThree = {
    slidesPerView: 1.788,
    speed: 900,
    spaceBetween: "20%",
    loop: true,
  };

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
        <div className="one">
          <Swiper className="one" key={"one"} ref={swiperRefOne} {...paramsOne}>
            {setOne &&
              setOne.map((img, i) => <Slide image={img} key={i + "one"} />)}
          </Swiper>
        </div>
        <div className="two">
          <Swiper ref={swiperRefTwo} {...paramsTwo}>
            {setTwo &&
              setTwo.map((img, i) => <Slide image={img} key={i + "two"} />)}
          </Swiper>
        </div>

        <div className="three">
          <Swiper ref={swiperRefThree} {...paramsThree}>
            {setThree &&
              setThree.map((img, i) => <Slide image={img} key={i + "Three"} />)}
          </Swiper>
        </div>

        <style jsx>{`
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
        `}</style>
      </section>
    </>
  );
};

export default Work;
