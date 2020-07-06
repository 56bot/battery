import { SlideUp } from "components/animations";

import Image from "components/Image";

const ClientImages = ({ images }) => {
  return (
    <section>
      {images.map((img, i) => (
        <Image noBackground {...img} key={i} />
      ))}
    </section>
  );
};

const OurClients = ({ clients }) => {
  const { text, client_logos } = clients;

  return (
    <section className="our-clients mxa mw-small main-text">
      <SlideUp>
        <span dangerouslySetInnerHTML={{ __html: text }} />
        <ClientImages images={client_logos} />
      </SlideUp>

      <style jsx>{`
        section {
          padding: calc(var(--gutter-medium) * 3) var(--gutter);
          margin-bottom: var(--gutter-medium);
        }

        span {
          display: block;
          margin-bottom: calc(var(--gutter-medium) * 3);
        }
      `}</style>
    </section>
  );
};

export default OurClients;
