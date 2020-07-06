import Image from "components/Image";

const ImageBlock = ({ image, width }) => (
  <section
    className={`image-project-section image ${
      width === "medium" ? "mw-medium" : ""
    } ${width === "small" ? "mw-small" : ""} mxa width-${width}`}
  >
    <div className="c12  bgc-grey  psr">
      <Image {...image} />
    </div>

    <style jsx>{`
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
    `}</style>
  </section>
);

export default ImageBlock;
