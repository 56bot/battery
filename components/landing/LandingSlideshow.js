import Swiper from "react-id-swiper";
import FeedItem from "components/feed/FeedItem";

const LandingSlideShow = ({ posts }) => {
  console.log(posts);

  const params = {
    slidesPerView: 1.1,
    spaceBetween: 0,
  };

  return (
    <section className="slideshow bgc-grey landing-ss main-parent">
      <div className="slideshow-parent mxa">
        <Swiper {...params}>
          {posts.map((post, i) => {
            post.acf.meta_info.layout_50_type = false;
            post.acf.meta_info.layout_50_options = false;
            post.acf.meta_info.feed_layout = "full";

            return (
              <div className="swiper-slide">
                <div className="feed-wrapper">
                  <FeedItem
                    key={i}
                    acf={post.acf}
                    post_type={post.post_type}
                    slug={post.post_name}
                  />
                </div>
              </div>
            );
          })}
        </Swiper>
      </div>

      <style jsx>{`
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

        .landing-ss a.feed-item.layout-full {
          padding-bottom: 60%;
        }

        .landing-ss a.feed-item.layout-full .image {
          opacity: 0.5;
        }

        .landing-ss .swiper-slide.swiper-slide-active .text {
          opacity: 1;
        }

        .landing-ss .swiper-slide .text {
          opacity: 0;
          transition: 0.3s ease-out opacity;
          transition-delay: 0.4s;
        }
      `}</style>
    </section>
  );
};

export default LandingSlideShow;
