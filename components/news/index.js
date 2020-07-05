import FeedItem from "components/feed/FeedItem";

import { SlideUp } from "components/animations";

export const feedHandler = (item, i) => {
  return (
    <FeedItem key={i} slug={item.slug} post_type={"news"} acf={item.acf} />
  );
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
        <SlideUp>
          <h1>What we’re up to</h1>
        </SlideUp>
      </div>

      <NewsFeed content={convertedArticles} />

      <style jsx>{`
        .intro-text {
          padding: calc(var(--gutter) * 4) var(--gutter);
          padding-top: calc(var(--gutter) * 4);
        }

        #page--news {
          margin-bottom: calc(var(--gutter-large) / 2);
        }
      `}</style>
    </div>
  );
};

export default Newspage;
