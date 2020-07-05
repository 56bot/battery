import { useEffect, useState } from "react";

import { getRelatedPosts } from "api/wp";

import Cover from "components/layout/Cover";
import FeedItem from "components/feed/FeedItem";

import { BottomShareBar } from "components/news/Article";

const RelatedArticles = ({ posts }) => {
  return (
    <section className="related-project-post">
      <section className="x xw">
        {posts.map((post, i) => {
          post.acf.meta_info.layout_50_type = false;
          post.acf.meta_info.layout_50_options = false;
          post.acf.meta_info.feed_layout = "full";

          if (i !== 0) return null;

          return (
            <FeedItem
              key={i}
              acf={post.acf}
              post_type="projects"
              slug={post.data.post_name}
            />
          );
        })}
      </section>
      <style jsx global>{``}</style>

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
      const posts = await getRelatedPosts("projects", id);
      console.log(posts, "Related ");

      setRelatedArticles(posts.results);
    };

    fetchData();

    return () => {
      abortController.abort();
    };
  }, [id]);

  return (
    <article key={id}>
      <Cover key={id} meta_info={acf.meta_info} />

      <BottomShareBar />

      {relatedArticles && <RelatedArticles key={id} posts={relatedArticles} />}
    </article>
  );
};

export default ProjectArticle;
