import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
        <motion.div
          initial={{ height: 0 }}
          transition={{
            type: "spring",
            mass: 0.8,
            damping: 100,
            duration: 0.8,
            stiffness: 200,
          }}
          animate={{
            height: expanded ? "auto" : 0,
          }}
        >
          {/* <motion.div
            initial={{ opacity: 0 }}
            transition={{
              type: "spring",
              mass: 0.8,
              damping: 100,
              delay: 0.1,
              duration: 0.4,
              stiffness: 200,
            }}
            animate={{
              opacity: expanded ? 1 : 0,
            }}
          >
            <Copy url={regularUrl} />
          </motion.div> */}
          <motion.div
            initial={{ opacity: 0 }}
            transition={{
              type: "spring",
              mass: 0.8,
              damping: 100,
              delay: 0.2,
              duration: 0.4,
              stiffness: 200,
            }}
            animate={{
              opacity: expanded ? 1 : 0,
            }}
          >
            <a
              aria-label="Share this page on Facebook"
              target="_blank"
              rel="noreferrer noopenerer"
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
            >
              <svg viewBox="0 0 512 512" preserveAspectRatio="xMidYMid meet">
                <path d="M211.9 197.4h-36.7v59.9h36.7V433.1h70.5V256.5h49.2l5.2-59.1h-54.4c0 0 0-22.1 0-33.7 0-13.9 2.8-19.5 16.3-19.5 10.9 0 38.2 0 38.2 0V82.9c0 0-40.2 0-48.8 0 -52.5 0-76.1 23.1-76.1 67.3C211.9 188.8 211.9 197.4 211.9 197.4z"></path>
              </svg>
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            transition={{
              type: "spring",
              mass: 0.8,
              damping: 100,
              delay: 0.3,
              duration: 0.4,
              stiffness: 200,
            }}
            animate={{
              opacity: expanded ? 1 : 0,
            }}
          >
            <a
              aria-label="Share this page on Twitter"
              target="_blank"
              rel="noreferrer noopenerer"
              href={`https://twitter.com/intent/tweet?url=${encodedUrl}`}
            >
              <svg viewBox="0 0 512 512" preserveAspectRatio="xMidYMid meet">
                <path d="M419.6 168.6c-11.7 5.2-24.2 8.7-37.4 10.2 13.4-8.1 23.8-20.8 28.6-36 -12.6 7.5-26.5 12.9-41.3 15.8 -11.9-12.6-28.8-20.6-47.5-20.6 -42 0-72.9 39.2-63.4 79.9 -54.1-2.7-102.1-28.6-134.2-68 -17 29.2-8.8 67.5 20.1 86.9 -10.7-0.3-20.7-3.3-29.5-8.1 -0.7 30.2 20.9 58.4 52.2 64.6 -9.2 2.5-19.2 3.1-29.4 1.1 8.3 25.9 32.3 44.7 60.8 45.2 -27.4 21.4-61.8 31-96.4 27 28.8 18.5 63 29.2 99.8 29.2 120.8 0 189.1-102.1 185-193.6C399.9 193.1 410.9 181.7 419.6 168.6z"></path>
              </svg>
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            transition={{
              type: "spring",
              mass: 0.8,
              damping: 100,
              delay: 0.3,
              duration: 0.4,
              stiffness: 200,
            }}
            animate={{
              opacity: expanded ? 1 : 0,
            }}
          >
            <a
              aria-label="Share this page on LinkedIn"
              target="_blank"
              rel="noreferrer noopenerer"
              href={`http://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}`}
            >
              <svg viewbox="0 0 512 512" preserveAspectRatio="xMidYMid meet">
                <path d="M186.4 142.4c0 19-15.3 34.5-34.2 34.5 -18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5C171.1 107.9 186.4 123.4 186.4 142.4zM181.4 201.3h-57.8V388.1h57.8V201.3zM273.8 201.3h-55.4V388.1h55.4c0 0 0-69.3 0-98 0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9 0 26.9 0 98 0 98h57.5c0 0 0-68.2 0-118.3 0-50-28.3-74.2-68-74.2 -39.6 0-56.3 30.9-56.3 30.9v-25.2H273.8z"></path>
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        section {
          padding: var(--gutter-medium);
          padding-bottom: 0;
          margin-top: calc(var(--gutter-medium) * 1.56);
          margin-bottom: calc(var(--gutter-medium * -2));
          position: relative;
        }

        svg {
          width: 100%;
        }

        .share-items {
          line-height: 1.7;
          width: 60px;
        }
        a {
          display: block;
          width: 35px;
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
          overflow: hidden;
          top: calc(var(--gutter-medium) * 2 + 10px);
          padding-top: 40px;
          transition: 0.4s ease-out opacity;
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
