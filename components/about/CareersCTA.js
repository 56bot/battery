import Link from "next/link";

import Cover from "components/layout/Cover";
import Image from "components/Image";

const CareersCTA = ({ title, cover_photo }) => {
  const meta_info = {
    cover_image: cover_photo,
    title,
  };

  return (
    <section className="careers-cta">
      <div className="img mxa">
        <Image {...meta_info.cover_image} />
      </div>

      <style jsx>{`
        .img {
          max-width: 1000px;
        }
      `}</style>
    </section>
  );
};

export default CareersCTA;
