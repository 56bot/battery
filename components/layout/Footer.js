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
        <a className={`row ${black ? "inverted" : "not-inverted"}`}>
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
      `}</style>
    </section>
  );
};
