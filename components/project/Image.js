import Image from "components/Image";

const ImageBlock = ({ image, width, caption }) => (
  <section
    className={`image-project-section image ${
      width === "medium" ? "mw-medium" : ""
    } ${width === "small" ? "mw-small" : ""} mxa width-${width}`}
  >
    <div className="c12  bgc-grey  psr">
      <Image {...image} />
    </div>

    {caption && (
      <div className="px1 py1 caption image-caption">
        <p dangerouslySetInnerHTML={{ __html: caption }} />
      </div>
    )}

    <style jsx>{`
      .caption {
        padding: 1rem;
      }
      .image-project-section {
        padding: var(--gutter-medium);
        margin-bottom: calc(var(--gutter-medium) * 3);
        overflow: hidden;
      }

      .image-project-section.mw-medium {
        width: 80vw;
        max-width: unset;
      }
      .psr {
        position: relative;
        overflow: hidden;
      }
      .image-project-section.width-full {
        width: 100%;
        padding: 0;
      }

      @media (max-width: 800px) {
        .image-project-section.mw-medium {
          width: 100vw;
        }
      }

      @media (max-width: 750px) {
        .image-project-section {
          margin-bottom: var(--gutter-medium);
        }
      }
    `}</style>
  </section>
);

export default ImageBlock;
