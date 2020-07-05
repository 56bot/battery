import LandingText from "./LandingText";
import FeedItem from "components/feed/FeedItem";

export const feedHandler = (item, i) => {
  switch (item.row_type) {
    case "text":
      return <LandingText key={i} {...item} />;
    case "post_project":
      if (item.item && item.item.length > 0)
        return (
          <FeedItem
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
    </div>
  );
};

export default Homepage;
