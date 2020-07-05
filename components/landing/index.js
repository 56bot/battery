import LandingText from "./LandingText";

export const feedHandler = (item, i) => {
  console.log(item, "item");

  switch (item.row_type) {
    case "text":
      return <LandingText key={i} {...item} />;
    default:
      return null;
  }
};

const HomepageFeed = ({ content }) => {
  return <section id="homepage-feed">{content.map(feedHandler)}</section>;
};

const Homepage = ({ page }) => {
  return (
    <div id="page--homepage">
      <HomepageFeed content={page.acf.content} />
    </div>
  );
};

export default Homepage;
