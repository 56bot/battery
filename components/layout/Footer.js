import { useEffect, useState, useRef } from "react";
import Link from "next/link";

export const FooterNav = ({ black = false }) => {
  return (
    <section
      id="footer-nav"
      className={`c12 x xw xjb ${
        black ? "bgc-white c-black" : "bgc-black c-white"
      } `}
    >
      <Link href="/" passHref>
        <a className={`row logo-row ${black ? "inverted" : "not-inverted"}`}>
          <img
            className="logo"
            src="/images/battery-logo.png"
            alt="Battery Agency Logo"
          />
        </a>
      </Link>

      <div className="row">
        <p className="fsE">
          6565 West Sunset Blvd <br /> Hollywood, CA 90028
        </p>
      </div>

      <div className="row">
        <p className="fsE">
          323.467.7267 <br /> info@batteryagency.com
        </p>
      </div>

      <div className="row">
        <p className="fsE">
          New Project Inquiries Anson. <br /> Sowby@batteryagency.com
        </p>
      </div>

      <style jsx>{`
        .logo {
          width: 100px;
        }

        .row {
          width: 20%;
        }
        .inverted {
          filter: invert(1);
        }

        @media (max-width: 800px) {
          .logo-row {
            display: none;
          }

          .row {
            width: 33.33%;
          }
        }
        @media (max-width: 750px) {
          .row {
            width: 100%;
            margin-bottom: var(--gutter);
          }
        }
      `}</style>
    </section>
  );
};

const Footer = ({ setAdditionalSpaceForFooter }) => {
  const footerContentHeight = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (footerContentHeight && footerContentHeight.current) {
        // setHeight();
        setAdditionalSpaceForFooter(footerContentHeight.current.offsetHeight);
      }
    };

    const timeout = setTimeout(() => {
      handleResize();
    }, 1000);

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(timeout);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <footer ref={footerContentHeight} className="bgc-black c-white">
      <FooterNav />

      <div id="bottom-bar" className="c12 x xw xjb">
        <p>© 2020 Battery. All Rights Reserved.</p>
        <p>
          <Link href="/terms" passHref>
            <a>Privacy Policy</a>
          </Link>
        </p>
      </div>
      <style jsx>{`
        footer {
          padding: calc(var(--gutter) * 2) var(--gutter);
          padding-bottom: var(--gutter);
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          z-index: 1;
        }

        p {
          font-size: 12px;
        }

        #bottom-bar {
          margin-top: 40px;
          opacity: 0.5;

          padding-top: 20px;
          border-top: 1px solid white;
        }
        @media (max-width: 750px) {
          #bottom-bar {
            margin-top: var(--gutter);
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
