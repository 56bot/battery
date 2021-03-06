import Link from "next/link";
import { useEffect, useState } from "react";

import { getRelatedPosts } from "api/wp";

import Cover from "components/layout/Cover";
import FeedItem from "components/feed/FeedItem";
import TopShareBar from "./TopShareBar";

const ArticleText = ({ text }) => {
  return (
    <section className="main-text mw-small">
      <span dangerouslySetInnerHTML={{ __html: text }} />

      <style jsx>{`
        .main-text {
          padding: calc(var(--gutter-large) / 2) var(--gutter-medium);
          padding-top: var(--gutter);
          margin: auto;
          min-height: 150px;
        }
      `}</style>
    </section>
  );
};

export const BottomShareBar = () => {
  const [encodedUrl, setEncodedUrl] = useState(false);

  useEffect(() => {
    setEncodedUrl(window ? encodeURIComponent(window.location.href) : false);
  }, []);

  return (
    <section className="mw-medium mxa">
      <div className="c12 x xw fsD bottom-share-bar ">
        <div className="c6 share-title">
          <div>Share Via</div>
        </div>
        <div className="c6 share-links x xw">
          <div className="c6">
            <a
              target="_blank"
              rel="noreferrer noopenerer"
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
            >
              Facebook <span className="arr">{`→`}</span>
            </a>
          </div>
          <div className="c6">
            <a
              target="_blank"
              rel="noreferrer noopenerer"
              href={`https://twitter.com/intent/tweet?url=${encodedUrl}`}
            >
              Twitter <span className="arr">{`→`}</span>
            </a>
          </div>
        </div>
      </div>
      <style jsx>{`
        section {
          padding: 0 var(--gutter-medium);
        }
        .bottom-share-bar {
          padding: calc(var(--gutter-large) / 2) 0;
          border-top: 1px solid rgba(0, 0, 0, 0.2);
          border-bottom: 1px solid rgba(0, 0, 0, 0.2);
          margin-bottom: calc(var(--gutter-large) / 2);
        }
        a:hover .arr {
          transform: translateX(6px);
        }
        .arr {
          pointer-events: none;
          transition: 0.3s ease-out transform;
          display: inline-block;
          padding-left: 4px;
        }

        @media (max-width: 750px) {
          .share-links {
            width: 100%;
          }

          section {
            padding: 0 var(--gutter);
          }
        }
      `}</style>
    </section>
  );
};

const RelatedArticles = ({ posts }) => {
  return (
    <section className="mw-medium mxa">
      <Link href="/news" passHref>
        <a>
          <h2 className="px2">More Articles</h2>
        </a>
      </Link>
      <section className="related-articles x xw xjb px2">
        {posts.map((post, i) => {
          let options = {};
          options.layout_50_type = false;
          options.layout_50_options = false;
          options.feed_layout = "fifty";

          return (
            <FeedItem
              key={i}
              acf={post.acf}
              post_type="news"
              options={options}
              slug={post.data.post_name}
            />
          );
        })}
      </section>

      <style jsx>{`
        .px2 {
          padding: 0 var(--gutter-medium);
        }

        h2 {
          opacity: 50%;
          margin-bottom: calc(var(--gutter-medium) * 2);
        }
        .related-articles {
          margin-bottom: calc(var(--gutter-large) / 2);
        }

        @media (max-width: 750px) {
          .related-articles.px2 {
            padding-left: 0;
            padding-right: 0;
          }
          .px2 {
            padding: 0 var(--gutter);
          }
        }
      `}</style>

      <style jsx global>{`
        .related-articles a.layout-fifty {
          width: 48%;
        }

        @media (max-width: 750px) {
          .related-articles a.layout-fifty {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

const NewsArticle = ({ acf, id }) => {
  const [relatedArticles, setRelatedArticles] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async () => {
      const posts = await getRelatedPosts("news", id);
      setRelatedArticles(posts.results);
    };

    fetchData();

    return () => {
      abortController.abort();
    };
  }, [id]);

  return (
    <article>
      <Cover meta_info={acf.meta_info} />

      <TopShareBar />

      <ArticleText text={acf.text} />

      <BottomShareBar />
      {relatedArticles && <RelatedArticles posts={relatedArticles} />}
    </article>
  );
};

export default NewsArticle;
