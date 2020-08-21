import FeedItem from "components/feed/FeedItem";
import { BackToTop } from "components/landing";

const workPageFeedBuilder = (i, item) => {
  let options = {
    feed_layout: "",
    layout_50_options: "",
    layout_50_type: "",
  };

  if (i % 10 === 0 || i % 10 === 3 || i % 10 === 5) {
    options.feed_layout = "full";
  } else if (i % 10 === 1) {
    options.feed_layout = "seventy";
  } else if (i % 10 === 2) {
    options.feed_layout = "thirty";
  } else if (i % 10 === 4) {
    options.feed_layout = "centred";
  } else if (i % 10 === 6) {
    options.feed_layout = "fifty";
    options.layout_50_options = "left_flush";
    options.layout_50_type = "true";
  } else if (i % 10 === 7) {
    options.feed_layout = "fifty";
    options.layout_50_options = "right_flush";
  } else if (i % 10 === 8) {
    options.feed_layout = "full";
  } else if (i % 10 === 9) {
    options.feed_layout = "centred";
  }

  return options;
};

export const feedHandler = (item, i) => {
  const options = workPageFeedBuilder(i, item);

  return (
    <FeedItem
      key={i}
      slug={item.slug}
      options={options}
      post_type={"projects"}
      acf={item.acf}
    />
  );
};

const WorkFeed = ({ content }) => {
  return (
    <section className="c12 x xw xjb" id="work-feed">
      {content.map(feedHandler)}
    </section>
  );
};

const Workpage = ({ page }) => {
  const convertedArticles = Object.keys(page).map((i) => {
    return page[i];
  });

  return (
    <div id="page--work">
      <WorkFeed content={convertedArticles} />
      <BackToTop />

      <style jsx>{`
        // #page--work {
        //   margin-bottom: calc(var(--gutter-large) / 2);
        // }
      `}</style>
    </div>
  );
};

export default Workpage;
