import Image from "components/Image";

const ImageBlock = ({ image_1, image_2, caption_1, caption_2 }) => (
  <section className={`image-project-section image mxa`}>
    <div className="c12 x xw xjb  psr">
      <div className="image-a image-">
        <Image {...image_1} />
        {caption_1 && (
          <div className="px1 py1 caption image-caption">
            <p dangerouslySetInnerHTML={{ __html: caption_1 }} />
          </div>
        )}
      </div>
      <div className="image-b image-">
        <Image {...image_2} />
        {caption_2 && (
          <div className="px1 py1 caption image-caption">
            <p dangerouslySetInnerHTML={{ __html: caption_2 }} />
          </div>
        )}
      </div>
    </div>

    <style jsx>{`
      .image-project-section {
        padding: var(--gutter-medium);
        margin-bottom: calc(var(--gutter-medium) * 3);
        overflow: hidden;
        width: 80vw;
        max-width: unset;
      }

      .caption {
        padding: 1rem;
      }

      .image- {
        width: calc(50% - 1rem);
        overflow: hidden;
      }
      .psr {
        position: relative;
      }
      .image-project-section.width-full {
        width: 100%;
        padding: 0;
      }

      @media (max-width: 800px) {
        .image-project-section {
          width: 100vw;
        }
      }

      @media (max-width: 750px) {
        .image-project-section {
          margin-bottom: 0;
        }

        .image- {
          margin-bottom: var(--gutter-medium);
          width: 100%;
        }
      }
    `}</style>
  </section>
);

export default ImageBlock;
