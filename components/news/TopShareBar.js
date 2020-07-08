import { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Copy = ({ url }) => {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    if (copied) return false;

    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1400);
  };

  return (
    <div>
      <CopyToClipboard text={url} onCopy={copy}>
        <div>{copied ? "Copied" : "Copy"}</div>
      </CopyToClipboard>

      <style jsx>{`
        div {
          cursor: pointer;
          transition: 0.3s ease-out opacity;
        }
        div:hover {
          opacity: 0.5;
        }
      `}</style>
    </div>
  );
};

export const TopShareBar = () => {
  const [encodedUrl, setEncodedUrl] = useState(false);
  const [regularUrl, setRegularUrl] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    setEncodedUrl(window ? encodeURIComponent(window.location.href) : false);
    setRegularUrl(window.location.href);
  }, []);

  const show = () => {
    setExpanded(true);
  };

  const hide = () => {
    setExpanded(false);
  };

  return (
    <section onMouseEnter={show} onMouseLeave={hide} className="mw-medium mxa">
      <div className="social-share">
        <img src="/images/share.svg" alt="Share Button" />
      </div>

      <div className={`share-items fsE expanded-${expanded}`}>
        <div>
          <Copy url={regularUrl} />
        </div>
        <a
          target="_blank"
          rel="noreferrer noopenerer"
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        >
          Facebook
        </a>
        <a
          target="_blank"
          rel="noreferrer noopenerer"
          href={`https://twitter.com/intent/tweet?url=${encodedUrl}`}
        >
          Twitter
        </a>
      </div>

      <style jsx>{`
        section {
          padding: var(--gutter-medium);
          padding-bottom: 0;
          margin-top: calc(var(--gutter-medium) * 1.56);
          margin-bottom: calc(var(--gutter-medium * -2));
          position: relative;
        }

        .share-items {
          line-height: 1.7;
        }
        a {
          display: block;
          transition: 0.3s ease-out opacity;
        }
        a:hover {
          opacity: 0.5;
        }

        .social-share {
          width: 35px;
          position: absolute;
          left: 20px;
          top: calc(var(--gutter-medium) * 2);
        }

        .share-items {
          position: absolute;
          left: 20px;
          top: calc(var(--gutter-medium) * 2 + 10px);
          padding-top: 40px;
          transition: 0.4s ease-out opacity;
        }

        .expanded-false {
          opacity: 0;
        }
        .expanded-true {
          opacity: 1;
        }

        @media (max-width: 800px) {
          .share-items,
          .social-share {
            display: none;
          }

          section {
            margin-top: 20px;
            padding-top: 0;
            margin-bottom: 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default TopShareBar;
