import FeedItem from "components/feed/FeedItem";

export const feedHandler = (item, i) => {
  return (
    <FeedItem key={i} slug={item.slug} post_type={"projects"} acf={item.acf} />
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

      <style jsx>{`
        #page--work {
          margin-bottom: calc(var(--gutter-large) / 2);
        }
      `}</style>
    </div>
  );
};

export default Workpage;
