import Link from "next/link";

import Image from "components/Image";
import { CosmeticLink } from "components/Link";

const FeedItem = ({ acf, post_type }) => {
  const { meta_info } = acf;

  let image;
  if (meta_info.thumbnail_image) image = meta_info.thumbnail_image;
  else if (meta_info.cover_image) image = meta_info.cover_image;

  return (
    <section
      className={`feed-item layout-${meta_info.feed_layout} options_50-${meta_info.layout_50_options} type_50-overlay-${meta_info.layout_50_type}`}
    >
      <div className="image">
        <Image attachedToParent={meta_info.feed_layout === "full"} {...image} />
      </div>

      <div className="text">
        <p className="fsE margin-bottom">{meta_info.subtitle}</p>
        {meta_info.feed_layout == "full" ? (
          <h1 className="margin-bottom">{meta_info.title}</h1>
        ) : (
          <h2 className="margin-bottom">{meta_info.title}</h2>
        )}
        <p className="fsE">{meta_info.description}</p>
        {post_type === "news" && <CosmeticLink>Read More</CosmeticLink>}
      </div>

      <style jsx global>{``}</style>

      <style jsx>{`
        .feed-item.layout-full {
          height: 0;
          padding-bottom: 40%;
          width: 100%;
          overflow: hidden;
          position: relative;
        }
        .layout-full .text,
        .layout-fifty.type_50-overlay-true .text {
          position: absolute;
          padding-bottom: 0;
          padding-left: var(--gutter-medium);
          padding-right: var(--gutter);
          bottom: var(--gutter-medium);
          left: 0;
          width: 100%;
          color: white;
          margin: auto;
        }

        .layout-full::after,
        .layout-fifty.type_50-overlay-true::after {
          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0) 36.98%,
            rgba(0, 0, 0, 0.9) 100%
          );
          content: " ";
          height: 100%;
          width: 100%;
          bottom: 0;
          left: 0;
          position: absolute;
          z-index: 0;
        }
        .margin-bottom {
          margin-bottom: calc(var(--gutter-medium) / 3);
        }

        .layout-full {
          width: 100%;
          color: white;
        }

        .text {
          max-width: 500px;
          position: relative;
          z-index: 2;
        }
        .layout-full .text {
          max-width: 80%;
        }

        .layout-centred {
          width: 100%;
          display: flex;
          padding: 0 5%;
          align-items: center;
        }
        .layout-centred .image {
          width: 50%;
        }

        .layout-fifty.options_50-centred .image,
        .layout-fifty.options_50-centred .text {
          width: 80%;
          margin: auto;
          max-width: unset;
        }

        .layout-fifty.options_50-centred .text {
          padding-right: 20%;
        }
        .layout-centred .text {
          width: 50%;
          padding-left: var(--gutter-medium);
          max-width: 500px;
        }

        .text {
          margin-top: calc(var(--gutter) / 1.25);
          width: 100%;
        }

        .image {
          background-color: var(--grey);
        }

        .feed-item {
          position: relative;
          height: 100%;
          margin-top: calc(var(--gutter) * 2);
          margin-bottom: calc(var(--gutter) * 2);
        }

        .layout-seventy {
          width: 60%;
        }
        .layout-thirty {
          width: 40%;
        }

        .layout-fifty {
          width: 50%;
        }

        .layout-thirty {
          padding-left: var(--gutter);
          padding-right: var(--gutter);
        }
        .layout-seventy {
          transform: translateX(var(--gutter));
          padding-right: var(--gutter);
        }

        .layout-fifty.type_50-overlay-true {
          width: 44%;
        }
      `}</style>
    </section>
  );
};

export default FeedItem;
