import Swiper from "react-id-swiper";
import Image from "components/Image";

const SlideShow = ({ images }) => {
  const params = {
    slidesPerView: 1.3,
    spaceBetween: 50,
    centeredSlides: true,
  };

  return (
    <section className="slideshow main-parent">
      <div className="slideshow-parent mxa">
        <Swiper {...params}>
          {images.map((img, i) => (
            <div className="swiper-slide">
              <Image {...img} />
            </div>
          ))}
        </Swiper>
      </div>

      <style jsx>{`
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
      `}</style>
    </section>
  );
};

export default SlideShow;
