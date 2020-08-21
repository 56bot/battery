import animateScrollTo from "animated-scroll-to";

import LandingText from "./LandingText";
import LandingSlideshow from "./LandingSlideshow";
import FeedItem from "components/feed/FeedItem";

const homepagFeedBuilder = (i, item) => {
  let options = {
    feed_layout: "",
    layout_50_options: "",
    layout_50_type: "",
  };

  if (i % 13 === 0 || i % 13 === 6) {
    options.feed_layout = "centred";
  } else if (i % 13 === 1) {
    options.feed_layout = "seventy";
  } else if (i % 13 === 2) {
    options.feed_layout = "thirty";
  } else if (i % 13 === 3 || i % 13 === 7 || i % 13 === 10) {
    options.feed_layout = "full";
  } else if (i % 13 === 4 || i % 13 === 11) {
    options.feed_layout = "fifty";
    options.layout_50_options = "centred";
  } else if (i % 13 === 5) {
    options.feed_layout = "fifty";
    options.layout_50_options = "right_flush";
    options.layout_50_type = "true";
  } else if (i % 13 === 8) {
    options.feed_layout = "fifty";
    options.layout_50_options = "left_flush";
    options.layout_50_type = "true";
  } else if (i % 13 === 9 || i % 13 === 12) {
    options.feed_layout = "fifty";
    options.layout_50_options = "right_flush";
  }

  return options;
};

export const feedHandler = (item, i) => {
  const options = homepagFeedBuilder(i, item);

  switch (item.row_type) {
    case "text":
      return <LandingText key={i} {...item} />;
    case "post_project":
      if (item.item && item.item.length > 0)
        return (
          <FeedItem
            slug={item.item[0].post_name}
            key={i}
            options={options}
            post_type={item.item[0].post_type}
            acf={item.item[0].acf}
          />
        );
      else return null;
    default:
      return null;
  }
};

export const BackToTop = () => {
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
          margin-top: calc(-2 * var(--gutter-medium));
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
      <LandingSlideshow posts={page.acf.landing_carousel} />
      <HomepageFeed content={page.acf.content} />
      <BackToTop />
    </div>
  );
};

export default Homepage;
