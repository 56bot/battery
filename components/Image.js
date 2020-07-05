import { ZoomOut } from "components/animations";

const Image = ({
  url,
  sizes,
  height,
  width,
  alt,
  attachedToParent = false,
}) => {
  return (
    <div className="parent">
      <ZoomOut>
        <figure
          className={`attached-to-parent-${attachedToParent}`}
          style={{ paddingBottom: (height / width) * 100 + "%" }}
        >
          <img
            height={height}
            width={width}
            loading="lazy"
            src={url}
            alt={alt}
          />

          <style jsx>{`
            figure {
              height: 0;
              position: relative;
              width: 100%;
            }

            div {
              width: 100%;
              height: 100%;
              overflow: hidden;
            }

            .attached-to-parent figure {
              position: static;
              height: 100%;
              width: 100%;
            }

            img {
              position: absolute;
              top: 0;
              left: 0%;
              height: 100%;
              width: 100%;
              object-fit: cover;
            }
          `}</style>
        </figure>
      </ZoomOut>
    </div>
  );
};

export default Image;
