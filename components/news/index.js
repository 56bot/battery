import FeedItem from "components/feed/FeedItem";

export const feedHandler = (item, i) => {
  return <FeedItem key={i} post_type={"news"} acf={item.acf} />;
};

const NewsFeed = ({ content }) => {
  return (
    <section className="c12 x xw xjb" id="news-feed">
      {content.map(feedHandler)}
    </section>
  );
};

const Newspage = ({ page }) => {
  const convertedArticles = Object.keys(page).map((i) => {
    return page[i];
  });

  return (
    <div id="page--news">
      <NewsFeed content={convertedArticles} />
    </div>
  );
};

export default Newspage;
