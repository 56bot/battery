import animateScrollTo from "animated-scroll-to";

import { useEffect, useState, useRef } from "react";

import { motion } from "framer-motion";

import { RawImage } from "components/Image";
import { RawVideo } from "components/layout/Cover";

const Video = ({
  poster_image,
  video_file,
  video_url,
  poster_video,
  caption,
}) => {
  const ref = useRef();

  const [playing, setPlaying] = useState(false);
  const [hoveringOverVideo, setHoveringOverVideo] = useState(false);
  const [hoverPosition, setHoverPosition] = useState({
    x: 0,
    y: 0,
  });

  const handleMouseEnter = () => {
    setHoveringOverVideo(true);
  };
  const handleMouseLeave = () => {
    setHoveringOverVideo(false);
  };

  const handleMouseMove = (e) => {
    if (!ref && !ref.current && !window) return false;

    setHoverPosition({
      x: e.clientX - 10,
      y: e.clientY - 20,
    });
  };

  let src;

  // set video src
  if (video_file && video_file !== "") src = video_file;
  else if (video_url && video_url !== "") src = video_url;

  // control video player
  const togglePlaying = () => {
    setPlaying(!playing);

    if (ref && ref.current) {
      if (playing) {
        ref.current.pause();
      } else {
        animateScrollTo(ref.current);
        ref.current.play();
      }
    }
  };

  useEffect(() => {
    console.log(hoverPosition);
  }, [hoverPosition]);

  return (
    <>
      <motion.section
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        initial={{ opacity: 1, height: "42vw" }}
        transition={{
          type: "spring",
          mass: 0.8,
          damping: 100,
          delay: 0.2,
          stiffness: 200,
        }}
        animate={{
          height: playing ? "100vh" : "42vw",
        }}
        className={`video-section playing-${playing}`}
      >
        <video ref={ref} loop src={src} />

        <div
          className={`play-btn playing-${playing}`}
          style={{
            display: "inline-block",
            opacity: hoveringOverVideo ? "1" : "0",
            transform: `translateX(${hoverPosition.x}px) translateY(${hoverPosition.y}px)`,
            WebkitTransform: `translate(${hoverPosition.x}px, ${hoverPosition.y}.px)`,
          }}
        >
          <img src="/images/play-button.svg" alt="Play Button" />
        </div>

        <motion.div
          onClick={togglePlaying}
          initial={{ opacity: 1 }}
          transition={{
            type: "spring",
            mass: 0.8,
            damping: 100,
            delay: 0.2,
            stiffness: 200,
          }}
          animate={{
            opacity: playing ? 0 : 1,
          }}
          className="poster-image"
        >
          {!poster_video || poster_video == "" ? (
            <RawImage {...poster_image} />
          ) : (
            <RawVideo url={poster_video} />
          )}
        </motion.div>
      </motion.section>

      {caption && (
        <div className="px1 py1 caption video-caption">
          <p dangerouslySetInnerHTML={{ __html: caption }} />
        </div>
      )}

      <style jsx>{`
        .caption {
          padding: 1rem;
          margin-top: calc(var(--gutter-medium) * -3);
          margin-bottom: calc(var(--gutter-medium) * 1);
        }

        video {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          object-fit: contain;
          object-position: center;
        }

        .play-btn {
          width: 40px;
          transition: 0.3s ease-out opacity;
          position: fixed;
          top: 0;
          z-index: 2;
          left: 0;
          will-change: transform;
          pointer-events: none;
        }

        @media (max-width: 750px) {
          .play-btn {
            top: 50%;
            left: 50%;
            position: absolute;
            transform: translate(-50%, -50%) !important;
            opacity: 0 !important;
          }
          .play-btn.playing-false {
            opacity: 1 !important;
          }
        }
      `}</style>
      <style jsx global>{`
        .video-section {
          cursor: none;
          position: relative;
          background-color: black;
          overflow: hidden;
          margin-bottom: calc(var(--gutter-medium) * 3);
        }

        @media (max-width: 750px) {
          .video-section {
            margin-bottom: var(--gutter-medium);
          }

          .video-caption.caption {
            padding: 1rem;
            margin-top: calc(var(--gutter-medium) * -1);
            margin-bottom: calc(var(--gutter-medium) * 0.5);
          }
        }

        .poster-image {
          height: 100%;
          width: 100%;
          position: relative;
        }
      `}</style>
    </>
  );
};

export default Video;
