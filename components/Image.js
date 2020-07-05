const Image = ({ url, sizes, height, width, alt }) => {
  return (
    <figure style={{ paddingBottom: (height / width) * 100 + "%" }}>
      <img height={height} width={width} loading="lazy" src={url} alt={alt} />

      <style jsx>{`
        figure {
          height: 0;
          position: relative;
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
  );
};

export default Image;
