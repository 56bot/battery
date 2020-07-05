import { useState } from "react";

import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const [additionalSpaceForFooter, setAdditionalSpaceForFooter] = useState(0);

  let mainStyle = { "--footer-height": `${additionalSpaceForFooter}px` };

  return (
    <main>
      <Header />

      <div style={mainStyle} id="content">
        {children}
      </div>

      <Footer setAdditionalSpaceForFooter={setAdditionalSpaceForFooter} />

      <style jsx>{`
        main {
          width: 100vw;
          overflow: hidden;
        }
        #content {
          min-height: 100vh;
          width: 100vw;
          overflow: hidden;
          margin-bottom: calc(var(--footer-height));
          z-index: 2;
          background-color: white;
          position: relative;
        }
      `}</style>
    </main>
  );
};

export default Layout;
