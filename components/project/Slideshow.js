import { useRef, useState, useEffect } from "react";
import Swiper from "react-id-swiper";
import Image from "components/Image";

const SlideShow = ({ images, small_slideshow = false }) => {
  const [percent, setPercent] = useState(0);
  const [baseVal, setBaseVal] = useState(52);
  const swiperRef = useRef(null);

  useEffect(() => {
    const handleSlideChange = () => {
      if (swiperRef.current) {
        const percent =
          swiperRef.current.swiper.activeIndex / (images.length - 1);
        setPercent(percent * 100);
      }
    };

    setTimeout(() => {
      swiperRef.current.swiper.on("slideChange", handleSlideChange);
    }, 100);

    return () => {
      if (swiperRef.current) {
        swiperRef.current.swiper.off("slideChange", handleSlideChange);
      }
    };
  }, []);

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
    slidesPerView: small_slideshow ? 1 : 1.3,
    spaceBetween: 50,
    centeredSlides: true,
  };

  const radius = baseVal;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <section className={`slideshow main-parent small-${small_slideshow}`}>
      <div className="slideshow-parent mxa">
        <Swiper ref={swiperRef} {...params}>
          {images.map((img, i) => {
            return (
              <div key={i} className="swiper-slide">
                <Image {...img} />
                {img.caption && <div className="caption">{img.caption}</div>}
              </div>
            );
          })}
        </Swiper>
        <div className="progress">
          <svg className="progress-ring" viewBox="0 0 120 120">
            <circle
              stroke="rgba(0,0,0,0.1)"
              strokeWidth="13"
              fill="transparent"
              r={baseVal}
              cx="60"
              cy="60"
            />
            <circle
              style={{
                strokeDasharray: `${circumference} ${circumference}`,
                strokeDashoffset: `${offset}`,
              }}
              stroke="black"
              strokeWidth="13"
              fill="transparent"
              r={baseVal}
              cx="60"
              cy="60"
            />
          </svg>
        </div>

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

        .small-true .arr {
          width: 50%;
        }

        .caption {
          padding: 1rem 0rem;
        }

        circle {
          transition: 0.3s ease-out stroke-dashoffset;
        }

        .progress {
          position: absolute;
          bottom: calc(var(--gutter-medium) * -1);
          right: var(--gutter);
        }

        svg {
          width: 20px;
          transform: rotate(-90deg);
        }

        .next {
          right: 0;
          cursor: e-resize;
        }
        .prev {
          left: 0;
          cursor: w-resize;
        }

        .slideshow-parent {
          position: relative;
        }
        .main-parent {
          width: 100vw;
          overflow: hidden;
        }

        .main-parent.small-true {
          max-width: 700px;
          margin: auto;
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
