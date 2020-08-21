import FeedItem from "components/feed/FeedItem";
import { BackToTop } from "components/landing";

import { SlideUp } from "components/animations";

const newsPageFeedBuilder = (i, item) => {
  let options = {
    feed_layout: "",
    layout_50_options: "",
    layout_50_type: "",
  };

  if (i % 8 === 0) {
    options.feed_layout = "fifty";
    options.layout_50_options = "centred";
  } else if (i % 8 === 1) {
    options.feed_layout = "fifty";
    options.layout_50_options = "right_flush";
    options.layout_50_type = "true";
  } else if (i % 8 === 2) {
    options.feed_layout = "centred";
  } else if (i % 8 === 3 || i % 8 === 8) {
    options.feed_layout = "full";
  } else if (i % 8 === 4 || i % 8 === 5 || i % 8 === 6 || i % 8 === 7) {
    options.feed_layout = "fifty";
    options.layout_50_options = "centred";
  }

  return options;
};

export const feedHandler = (item, i) => {
  const options = newsPageFeedBuilder(i, item);

  return (
    <FeedItem
      key={i}
      slug={item.slug}
      post_type={"news"}
      options={options}
      acf={item.acf}
    />
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
      <BackToTop />

      <style jsx>{`
        .intro-text {
          padding: calc(var(--gutter) * 4) var(--gutter);
          padding-top: calc(var(--gutter) * 4);
        }

        @media (max-width: 750px) {
          .intro-text {
            padding: calc(var(--gutter) * 2) var(--gutter);
            padding-top: calc(var(--gutter) * 4);
          }
        }
      `}</style>
    </div>
  );
};

export default Newspage;
