import { useRef, useCallback, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { RawImage } from "components/Image";
import { SlideUp } from "components/animations";
import { CosmeticLink } from "components/Link";

export const RawVideo = ({ url }) => {
  const ref = useRef();
  const [inViewRef, inView] = useInView({
    rootMargin: "-30%",
  });

  const setRefs = useCallback(
    (node) => {
      // Ref's from useRef needs to have the node assigned to `current`
      ref.current = node;
      // Callback refs, like the one from `useInView`, is a function that takes the node as an argument
      inViewRef(node);
    },
    [inViewRef]
  );

  useEffect(() => {
    if (inView && ref.current) {
      ref.current.play();
    } else if (!inView && ref.current) {
      ref.current.pause();
    }
  }, [inView]);

  return (
    <div className="video">
      <video ref={setRefs} src={url} muted loop playsInline />

      <style jsx>{`
        .video,
        video {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          object-fit: cover;
          object-position: center;
        }
      `}</style>
    </div>
  );
};

// note, this mimicks the Full Width Feed Item
const Cover = ({ meta_info, cosmeticLink = false, smallTitle = false }) => {
  let image;
  let cover_video = meta_info.cover_video;

  // reverse these for the cover image
  if (meta_info.cover_image) image = meta_info.cover_image;
  else if (meta_info.thumbnail_image) image = meta_info.thumbnail_image;

  return (
    <section className="cover">
      {!cover_video || cover_video == "" ? (
        <div className="image">
          <RawImage attachedToParent {...image} />
        </div>
      ) : (
        <RawVideo url={cover_video} />
      )}

      <div className="text c-white">
        <SlideUp>
          <>
            <p className="fsE margin-bottom">{meta_info.subtitle}</p>
            {smallTitle ? (
              <h2 className="margin-bottom">{meta_info.title}</h2>
            ) : (
              <h1 className="margin-bottom">{meta_info.title}</h1>
            )}
            <p className="fsE">{meta_info.description}</p>
            {cosmeticLink && <CosmeticLink>{cosmeticLink}</CosmeticLink>}
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

        @media (max-width: 1000px) {
          .cover {
            padding-bottom: 55%;
          }
        }
        @media (max-width: 700px) {
          .cover {
            padding-bottom: 80%;
          }
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
