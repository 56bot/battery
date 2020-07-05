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
      <div className="intro-text tac">
        <h1>What we’re up to</h1>
      </div>

      <NewsFeed content={convertedArticles} />

      <style jsx>{`
        .intro-text {
          padding: calc(var(--gutter) * 3) var(--gutter);
          padding-top: calc(var(--gutter) * 4);
        }
      `}</style>
    </div>
  );
};

export default Newspage;
