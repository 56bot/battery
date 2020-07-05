import Image from "components/Image";

import { SlideUp } from "components/animations";

// note, this mimicks the Full Width Feed Item
const Cover = ({ meta_info }) => {
  let image;

  // reverse these for the cover image
  if (meta_info.cover_image) image = meta_info.cover_image;
  else if (meta_info.thumbnail_image) image = meta_info.thumbnail_image;

  return (
    <section className="cover bgc-grey">
      <div className="image">
        <Image attachedToParent {...image} />
      </div>

      <div className="text c-white">
        <SlideUp>
          <>
            <p className="fsE margin-bottom">{meta_info.subtitle}</p>
            <h1 className="margin-bottom">{meta_info.title}</h1>
            <p className="fsE">{meta_info.description}</p>
          </>
        </SlideUp>
      </div>

      <style jsx>{`
        .cover {
          height: 0;
          padding-bottom: 40%;
          width: 100%;
          overflow: hidden;
          position: relative;
        }

        .image {
          opacity: 0.5;
        }

        .text {
          position: absolute;
          bottom: var(--gutter-medium);
          z-index: 2;
          padding-left: var(--gutter-medium);
          left: 0;
          width: 80%;
        }

        .cover::after {
          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0) 36.98%,
            rgba(0, 0, 0, 0.9) 100%
          );
          content: " ";
          height: 100%;
          width: 100%;
          bottom: 0;
          left: 0;
          position: absolute;
          z-index: 0;
        }
      `}</style>
    </section>
  );
};

export default Cover;
