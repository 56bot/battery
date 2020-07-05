import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

import { FooterNav } from "../Footer";

const navItems = [
  {
    title: "About",
    link: "/about",
    text:
      "We partner with brands and create advertising that’s as sought-after as entertainment",
  },
  {
    title: "Work",
    link: "/work",
    text:
      "Work that makes a difference in culture and doesn’t fall by the wayside",
  },
  {
    title: "News",
    link: "/news",
    text: "Our recent announcements",
  },
  {
    title: "Careers",
    link: "/careers",
    text: "Join the team",
  },
];

const NavText = ({ text, title, hoveringOnNavItem }) => {
  let selected = null;
  if (hoveringOnNavItem) {
    selected = hoveringOnNavItem === title;
  }

  return (
    <div className={`selected-${selected}`}>
      <h2 className="nav-item">{text}</h2>

      <style jsx>{`
        div {
          position: relative;
          height: 100%;
          width: 20%;
          opacity: 0;
          transform: translateX(20px);
          transition: 0.3s ease-out opacity, 0.3s ease-out transform;
        }

        .selected-true {
          opacity: 1;
          transform: translateX(0);
        }

        h2 {
          position: absolute;
          top: 50%;
          left: 0;
          width: 40vw;
          transform: translateY(-50%);
        }
      `}</style>
    </div>
  );
};

const NavLink = ({
  title,
  link,
  hoveringOnNavItem,
  setHoveringOnNavItem,
  setHeaderExpanded,
}) => {
  const handleMouseEnter = () => {
    setHoveringOnNavItem(title);
  };

  const handleMouseLeave = () => {
    setHoveringOnNavItem(false);
  };

  const handleMouseClick = () => {
    setHeaderExpanded(false);
  };

  let selected = null;
  if (hoveringOnNavItem) {
    selected = hoveringOnNavItem === title;
  }

  return (
    <Link href={link} passHref>
      <a
        className={`selected-${selected}`}
        onClick={handleMouseClick}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
      >
        <h2 className="nav-item">{title}</h2>
        <style jsx>{`
          a {
            width: 20%;
            transition: 0.3s ease-out opacity;
          }

          a.selected-false {
            opacity: 0.5;
          }
        `}</style>
      </a>
    </Link>
  );
};

const CloseButton = ({ setHeaderExpanded }) => {
  const close = () => {
    setHeaderExpanded(false);
  };

  return (
    <div onClick={close} className="close curp psa">
      <img src="/images/close.svg" alt="Close" />

      <style jsx>{`
        .close {
          position: absolute;
          width: 46px;
          top: -5px;
          right: -25px;
          transition: 0.3s ease-out opacity;
        }
        .close:hover {
          opacity: 0.6;
        }
      `}</style>
    </div>
  );
};

const ExpandedHeader = ({ setHeaderExpanded, expanded }) => {
  const [hoveringOnNavItem, setHoveringOnNavItem] = useState(false);

  return (
    <section
      id="expanded-header"
      className={`c12 bgc-white header-expanded-${expanded} hovering-${hoveringOnNavItem}`}
    >
      <div id="top-bar" className="x xw xjb psr">
        {navItems.map((item) => (
          <NavLink
            hoveringOnNavItem={hoveringOnNavItem}
            setHoveringOnNavItem={setHoveringOnNavItem}
            setHeaderExpanded={setHeaderExpanded}
            {...item}
            key={item.title}
          />
        ))}

        <CloseButton setHeaderExpanded={setHeaderExpanded} />
      </div>

      <div id="middle" className="x xw xjb">
        {navItems.map((item) => (
          <NavText
            hoveringOnNavItem={hoveringOnNavItem}
            {...item}
            key={item.title}
          />
        ))}
      </div>

      <div id="bottom-bar">
        <FooterNav black />
      </div>

      <style jsx>{`
        section {
        }

        #middle {
          height: 320px;
        }

        #bottom-bar {
          transition: 0.3s ease-out opacity;
        }

        #expanded-header.hovering-false #bottom-bar {
          opacity: 1;
        }
        #expanded-header #bottom-bar {
          opacity: 0.5;
        }

        #expanded-header {
          opacity: 0;
          visibility: hidden;
          padding: var(--gutter) calc(var(--gutter) * 2);
          position: absolute;
          top: 0;
          left: 0;
          transition: 0.3s ease-in-out opacity, 0.3s ease-in-out visibility;
          z-index: 5;
          width: 100vw;
          overflow: hidden;
        }
        #expanded-header.header-expanded-true {
          opacity: 1;
          visibility: visible;
        }
      `}</style>
    </section>
  );
};

export default ExpandedHeader;
