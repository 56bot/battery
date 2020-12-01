import Link from "next/link";
import { useRef, useState } from "react";
import Swiper from "react-id-swiper";
// import FeedItem from "components/feed/FeedItem";
import Cover from "components/layout/Cover";

const LandingSlideShow = ({ posts }) => {
  const [shifted, setShifted] = useState(false);
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
    slidesPerView: 1.07,
    spaceBetween: 0,
  };

  const handleMouseEnter = () => {
    setShifted(true);
  };
  const handleMouseLeave = () => {
    setShifted(false);
  };

  return (
    <section className="slideshow landing-ss main-parent">
      <div className={`slideshow-parent mxa shifted-${shifted}`}>
        <Swiper ref={swiperRef} {...params}>
          {posts.map((post, i) => {
            post.acf.meta_info.layout_50_type = false;
            post.acf.meta_info.layout_50_options = false;
            post.acf.meta_info.feed_layout = "full";

            return (
              <div key={i} className="swiper-slide">
                <div className="feed-wrapper">
                  <Link
                    href="/work/[project]"
                    as={`/work/${post.post_name}`}
                    passHref
                  >
                    <a>
                      <Cover meta_info={post.acf.meta_info} />
                    </a>
                  </Link>
                </div>
              </div>
            );
          })}
        </Swiper>

        <div
          className="next arr"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={goNext}
        />
        <div className="prev arr" onClick={goPrev} />
      </div>

      <style jsx global>{`
        .shifted-true .swiper-slide {
          transform: translateX(-5%);
        }

        .swiper-slide {
          transition: 0.3s ease-out transform;
          will-change: transform;
        }
      `}</style>

      <style jsx>{`
        .slideshow-parent {
          position: relative;
        }

        .next {
          right: 0;
        }
        .prev {
          left: 0;
        }
        .arr {
          position: absolute;
          top: 0;
          width: 9.2vw;
          height: 100%;
          background-color: black;
          opacity: 0;
          z-index: 2;
          cursor: pointer;
          transition: 0.3s ease-out opacity;
        }

        .swiper-slide,
        .feed-wrapper {
          width: 100%;
        }

        .swiper-slide {
          cursor: grab;
        }
        .swiper-slide:active {
          cursor: grabbing;
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
          padding: 0;
        }
      `}</style>

      <style jsx global>{`
        .landing-ss a.feed-item {
          margin-bottom: 0 !important;
        }

        .landing-ss a.feed-item.layout-full,
        .landing-ss .cover {
          padding-bottom: 50%;
        }
        @media (max-width: 800px) {
          .landing-ss a.feed-item.layout-full,
          .landing-ss .cover {
            padding-bottom: 80%;
          }
        }

        .landing-ss .swiper-slide.swiper-slide-active .text {
          opacity: 1;
        }

        .landing-ss .swiper-slide .text {
          opacity: 0;
          transition: 0.3s ease-out opacity;
        }

.landing-ss .swiper-slide:last-of-type .text {opacity:1}
      `}</style>
    </section>
  );
};

export default LandingSlideShow;
