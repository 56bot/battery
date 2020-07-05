import Image from "components/Image";

const ImageBlock = ({ image_1, image_2 }) => (
  <section className={`image-project-section image mw-medium mxa`}>
    <div className="c12 x xw xjb  psr">
      <div className="image-a bgc-grey image-">
        <Image {...image_1} />
      </div>
      <div className="image-b bgc-grey image-">
        <Image {...image_2} />
      </div>
    </div>

    <style jsx>{`
      .image-project-section {
        padding: var(--gutter-medium);
        margin-bottom: calc(var(--gutter-medium) * 3);
        overflow: hidden;
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
    `}</style>
  </section>
);

export default ImageBlock;
