import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

import { SlideUp } from "components/animations";
import { ImageWithNoTransition } from "components/Image";

const ClientImages = ({ images }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <section className="x xw xjb">
      {images.map((img, i) => (
        <div ref={ref} className="client-image">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: inView ? 1 : 0,
              y: inView ? 0 : 20,
            }}
            transition={{
              delay: (i + 1) / 10,
              duration: 0.6,
            }}
          >
            <div className="image-container">
              <ImageWithNoTransition noBackground {...img} key={i} />
            </div>
          </motion.div>
        </div>
      ))}

      <style jsx>{`
        .client-image {
          width: 25%;
          padding: 6%;
        }

        .image-container {
          position: relative;
          width: 100%;
          padding-bottom: 100%;
        }
      `}</style>
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
