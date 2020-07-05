import { useRouter } from "next/router";
import { useState } from "react";

import FixedHeader from "./FixedHeader";
import ExpandedHeader from "./ExpandedHeader";

const Header = () => {
  const router = useRouter();
  const [headerExpanded, setHeaderExpanded] = useState(false);

  return (
    <header className={`header expanded-${headerExpanded} c12`}>
      <FixedHeader setHeaderExpanded={setHeaderExpanded} />
      <ExpandedHeader
        expanded={headerExpanded}
        setHeaderExpanded={setHeaderExpanded}
      />

      <style jsx>{`
        header {
          position: static;
          top: 0;
          display: inline;
          left: 0;
        }

        header.expanded-false {
        }
      `}</style>
    </header>
  );
};

export default Header;
