import { useRef } from "react";
import Swiper from "react-id-swiper";
import Image from "components/Image";

const SlideShow = ({ images }) => {
  const swiperRef = useRef(null);

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const params = {
    slidesPerView: 1.3,
    spaceBetween: 50,
    centeredSlides: true,
  };

  return (
    <section className="slideshow main-parent">
      <div className="slideshow-parent mxa">
        <Swiper ref={swiperRef} {...params}>
          {images.map((img, i) => (
            <div key={i} className="swiper-slide">
              <Image {...img} />
            </div>
          ))}
        </Swiper>

        <div className="arr next" onClick={goNext} />
        <div className="arr prev" onClick={goPrev} />
      </div>

      <style jsx>{`
        .arr {
          position: absolute;
          top: 0;
          height: 100%;
          width: 10vw;
          cursor: pointer;
          z-index: 2;
        }

        .next {
          right: 0;
        }
        .prev {
          left: 0;
        }

        .slideshow-parent {
          position: relative;
        }
        .main-parent {
          width: 100vw;
          overflow: hidden;
        }
        .swiper-slide:active {
          cursor: grabbing;
        }

        .swiper-slide {
          overflow: hidden;
          cursor: grab;
        }

        .slideshow-parent {
          overflow: visible;
          padding: var(--gutter) 0;
          margin-bottom: calc(var(--gutter-medium) * 3);
        }

        @media (max-width: 800px) {
          .slideshow-parent {
            padding-top: var(--gutter-medium);
            margin-bottom: var(--gutter-medium);
          }
        }
      `}</style>
    </section>
  );
};

export default SlideShow;
