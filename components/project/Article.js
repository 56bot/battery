import { useEffect, useState } from "react";

import { getRelatedPosts } from "api/wp";

import Cover from "components/layout/Cover";
import FeedItem from "components/feed/FeedItem";
import Content from "./Content";
import { BottomShareBar } from "components/news/Article";
import TopShareBar from "components/news/TopShareBar";

const RelatedArticles = ({ posts }) => {
  if (!posts || posts.length <= 0) return false;

  return (
    <section className="related-project-post">
      <section className="x xw">
        {posts.map((post, i) => {
          let options = {};
          options.layout_50_type = false;
          options.layout_50_options = false;
          options.feed_layout = "full";

          if (i !== 0) return null;

          return (
            <FeedItem
              key={i}
              acf={post.acf}
              post_type="projects"
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

        .related-project-post {
          margin-top: calc(var(--gutter-large) / -2);
        }
      `}</style>

      <style jsx global>{`
        .related-articles a.layout-fifty {
          width: 48%;
        }

        .related-project-post a.layout-full {
          margin-bottom: 0;
        }
      `}</style>
    </section>
  );
};

const ProjectArticle = ({ acf, id }) => {
  const [relatedArticles, setRelatedArticles] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async () => {
      try {
        const posts = await getRelatedPosts("projects", id);

        setRelatedArticles(posts.results);
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();

    return () => {
      abortController.abort();
    };
  }, [id]);

  return (
    <article key={id}>
      <Cover key={id + "cover"} meta_info={acf.meta_info} />

      <TopShareBar />

      <Content content={acf.content} />

      <BottomShareBar />

      {relatedArticles && (
        <RelatedArticles
          key={id + "related-articles"}
          posts={relatedArticles}
        />
      )}
    </article>
  );
};

export default ProjectArticle;
