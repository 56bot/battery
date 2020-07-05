import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import FixedHeader from "./FixedHeader";
import ExpandedHeader from "./ExpandedHeader";

const Header = () => {
  const router = useRouter();
  const [headerExpanded, setHeaderExpanded] = useState(false);

  useEffect(() => {
    if (headerExpanded) disableBodyScroll();
    else enableBodyScroll();
  }, [headerExpanded]);

  useEffect(() => {
    const checkForEscButton = (e) => {
      if (e.keyCode === 27) closeHeader();
    };

    document.addEventListener("keyup", checkForEscButton);

    return () => {
      document.removeEventListener("keyup", checkForEscButton);
    };
  }, []);

  const closeHeader = () => {
    setHeaderExpanded(false);
  };

  return (
    <header className={`header expanded-${headerExpanded} c12`}>
      <FixedHeader setHeaderExpanded={setHeaderExpanded} />
      <ExpandedHeader
        expanded={headerExpanded}
        setHeaderExpanded={setHeaderExpanded}
      />

      {headerExpanded && (
        <div className="header-collapser" onClick={closeHeader} />
      )}

      <style jsx>{`
        header {
          position: static;
          top: 0;
          display: inline;
          left: 0;
        }

        .header-collapser {
          z-index: 4;
          position: fixed;
          height: 100vh;
          width: 100vw;
          top: 0;
          left: 0;
          cursor: pointer;
        }

        header.expanded-false {
        }
      `}</style>
    </header>
  );
};

export default Header;
