import Link from "next/link";

import Image, { RawImage } from "components/Image";
import { CosmeticLink } from "components/Link";
import { SlideUp } from "components/animations";

const FeedItem = ({ acf, post_type, slug, options }) => {
  const { meta_info } = acf;

  let image;
  if (meta_info.thumbnail_image) image = meta_info.thumbnail_image;
  else if (meta_info.cover_image) image = meta_info.cover_image;

  let postTypePrefix;
  if (post_type === "projects") postTypePrefix = "work";
  else if (post_type === "news") postTypePrefix = "news";

  let postTypeSuffix;
  if (post_type === "projects") postTypeSuffix = "project";
  else if (post_type === "news") postTypeSuffix = "news";

  return (
    <Link
      href={`/${postTypePrefix}/[${postTypeSuffix}]`}
      as={`/${postTypePrefix}/${slug}`}
      passHref
    >
      <a
        className={`feed-item layout-${options.feed_layout} options_50-${options.layout_50_options} type_50-overlay-${options.layout_50_type}`}
      >
        <div className="image">
          {options.feed_layout === "full" ? (
            <RawImage {...image} />
          ) : (
            <Image {...image} />
          )}
        </div>

        <div className="text">
          <SlideUp>
            <>
              <p className="fsE margin-bottom">{meta_info.subtitle}</p>
              {options.feed_layout == "full" ? (
                <h1 className="margin-bottom">{meta_info.title}</h1>
              ) : (
                <h2 className="margin-bottom">{meta_info.title}</h2>
              )}
              {meta_info.description && (
                <p className="fsE">{meta_info.description}</p>
              )}
              {post_type === "news" && <CosmeticLink>Read More</CosmeticLink>}
            </>
          </SlideUp>
        </div>

        <style jsx>{`
          .feed-item.layout-full {
            height: 0;

            padding-bottom: 40%;
            width: 100%;
            overflow: hidden;
            position: relative;
            display: block;
          }

          .image {
            height: 100%;
            width: 100%;
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
            margin-left: auto;
            margin-right: auto;
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

          .layout-fifty.options_50-centred {
            flex-grow: 1;
          }

          .layout-fifty.options_50-centred .image,
          .layout-fifty.options_50-centred .text {
            width: 45vw;
            margin-left: auto;
            margin-right: auto;
            max-width: unset;
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
          }

          .feed-item {
            position: relative;
            height: 100%;
            margin-bottom: calc(var(--gutter-medium) * 3);
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

          @media (max-width: 1000px) {
            .feed-item.layout-full {
              padding-bottom: 55%;
            }
          }
          @media (max-width: 700px) {
            .feed-item.layout-full {
              padding-bottom: 80%;
            }

            .layout-seventy {
              transform: none;
              padding-left: var(--gutter);
            }

            .layout-seventy,
            .layout-fifty,
            .layout-thirty {
              width: 100%;
            }

            .layout-fifty.type_50-overlay-true {
              width: 100%;
            }
            .layout-fifty {
              padding: var(--gutter);
            }

            .layout-fifty.type_50-overlay-true {
              padding: 0;
            }
            .layout-centred {
              flex-wrap: wrap;
            }
            .layout-centred .image,
            .layout-centred .text {
              width: 100%;
              padding: 0;
            }

            .layout-fifty.options_50-centred .text,
            .layout-fifty.options_50-centred .image {
              width: 100%;
            }
            .feed-item {
              margin-bottom: var(--gutter);
            }
          }
        `}</style>

        <style jsx global>{`
          #page--news
            .layout-fifty.options_50-right_flush.type_50-overlay-false,
          #page--news
            .layout-fifty.options_50-right_margin.type_50-overlay-false {
            padding: var(--gutter);
            padding-left: calc(var(--gutter) / 1);
          }
          #page--news .layout-fifty.options_50-left_flush.type_50-overlay-false,
          #page--news
            .layout-fifty.options_50-left_margin.type_50-overlay-false {
            padding: var(--gutter);
            padding-right: calc(var(--gutter) / 1);
          }

          @media (max-width: 750px) {
            #page--news
              .layout-fifty.options_50-right_margin.type_50-overlay-false {
              padding: var(--gutter);
              padding-left: var(--gutter);
            }
            #page--news
              .layout-fifty.options_50-left_flush.type_50-overlay-false,
            #page--news
              .layout-fifty.options_50-left_margin.type_50-overlay-false {
              padding: var(--gutter);
              padding-right: var(--gutter);
            }
          }
        `}</style>
      </a>
    </Link>
  );
};

export default FeedItem;
