import Link from "next/link";

import Cover from "components/layout/Cover";

const CareersCTA = ({ title, cover_photo }) => {
  const meta_info = {
    cover_image: cover_photo,
    title,
  };

  return (
    <section className="careers-cta">
      <Link href="/careers" passHref>
        <a>
          <Cover meta_info={meta_info} smallTitle cosmeticLink={"Careers"} />
        </a>
      </Link>
    </section>
  );
};

export default CareersCTA;
