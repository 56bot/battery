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
      <div>
        <Link href="/" passHref>
          <a className={`row logo-row ${black ? "inverted" : "not-inverted"}`}>
            <img
              className="logo"
              src="/images/battery-logo.png"
              alt="Battery Agency Logo"
            />
          </a>
        </Link>
        <a className="contact" href="mailto:hello@batteryagency.com">
          Contact us: Hello@BatteryAgency.com
        </a>
      </div>

      <div className="row">
        <p className="fsE">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.google.com/maps/place/BATTERY/@34.0975785,-118.3330592,17z/data=!3m1!4b1!4m5!3m4!1s0x80c2b929bf8fbe19:0xdbccdcf1deddd237!8m2!3d34.0975741!4d-118.3308652?shorturl=1"
          >
            LA <br /> 6515 West Sunset Blvd <br /> Hollywood, CA 90028
          </a>
        </p>
      </div>

      <div className="row">
        <p className="fsE">
          <a
            href="https://goo.gl/maps/9ZEaF3ERrEXWMksL8"
            target="_blank"
            rel="noopener noreferrer"
          >
            TO <br /> 473 Adelaide St W <br /> Toronto, ON M5V 1T1
          </a>
        </p>
      </div>

      <div className="row">
        <p className="fsE">
          <a
            href="https://goo.gl/maps/jBVmR2LX8tTT6nXw9"
            target="_blank"
            rel="noopener noreferrer"
          >
            SHG <br /> 887 Huaihai Zhong Road <br /> Shanghai, China
          </a>
        </p>
      </div>

      <style jsx>{`
        .logo {
          width: 100px;
        }

        .contact {
          display: block;
          padding-top: 1rem;
          font-size: 0.8rem;
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
