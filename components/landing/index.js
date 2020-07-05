import animateScrollTo from "animated-scroll-to";

import LandingText from "./LandingText";
import FeedItem from "components/feed/FeedItem";

export const feedHandler = (item, i) => {
  console.log(item, "ITEM");

  switch (item.row_type) {
    case "text":
      return <LandingText key={i} {...item} />;
    case "post_project":
      if (item.item && item.item.length > 0)
        return (
          <FeedItem
            slug={item.item[0].post_name}
            key={i}
            post_type={item.item[0].post_type}
            acf={item.item[0].acf}
          />
        );
      else return null;
    default:
      return null;
  }
};

const BackToTop = () => {
  const scrollToTop = () => {
    animateScrollTo(0, {
      speed: 300,
    });
  };

  return (
    <div className="c12 tac ">
      <h2 onClick={scrollToTop} className="curp">
        Back to top
      </h2>

      <style jsx>{`
        div {
          padding: var(--gutter-large);
          margin-bottom: var(--gutter-medium);
        }

        h2 {
          opacity: 0.5;
          transition: 0.3s ease-out opacity;
        }

        h2:hover {
          opacity: 0.8;
        }
      `}</style>
    </div>
  );
};

const HomepageFeed = ({ content }) => {
  return (
    <section className="c12 x xw xjb" id="homepage-feed">
      {content.map(feedHandler)}
    </section>
  );
};

const Homepage = ({ page }) => {
  return (
    <div id="page--homepage">
      <HomepageFeed content={page.acf.content} />
      <BackToTop />
    </div>
  );
};

export default Homepage;
