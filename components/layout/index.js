import { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import Header from "./Header";
import Footer from "./Footer";

const handleLayoutType = (route) => {
  if (
    route === "/work/[project]" ||
    route === "/" ||
    route === "/work" ||
    route === "/news/[news]" ||
    route === "/careers" ||
    route === "/about"
  )
    return "enforce-black-bg";
  else return "default";
};

const Layout = ({ children }) => {
  const router = useRouter();

  const [additionalSpaceForFooter, setAdditionalSpaceForFooter] = useState(0);

  let mainStyle = { "--footer-height": `${additionalSpaceForFooter}px` };

  const classToHandleHeader = handleLayoutType(router.route);

  return (
    <main className={classToHandleHeader}>
      <Header />

      <Head>
        <title>
          Battery Los Angeles - An Ad Age Agency of the Year | One of the
          Leading Advertising Agencies in Los Angeles, CA | Top Creative Agency
          Near Me | Game Marketing in LA | Sports Advertising in Hollywood | Ad
          Agencies Specializing in Financial Services
        </title>
        Battery Los Angeles - An Ad Age Agency of the Year | One of the Leading
        Advertising Agencies in Los Angeles, CA | Top Creative Agency Near Me |
        Game Marketing in LA | Sports Advertising in Hollywood | Ad Agencies
        Specializing in Financial ServicesBattery Los Angeles - An Ad Age Agency
        of the Year | One of the Leading Advertising Agencies in Los Angeles, CA
        | Top Creative Agency Near Me | Game Marketing in LA | Sports
        Advertising in Hollywood | Ad Agencies Specializing in Financial
        Services
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://batteryagency.com/wp-content/uploads/fbrfg/favicon-32x32.png"
        ></link>
      </Head>

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
