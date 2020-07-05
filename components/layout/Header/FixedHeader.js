import Link from "next/link";

const FixedHeader = ({ setHeaderExpanded }) => {
  const expandHeader = () => {
    setHeaderExpanded(true);
  };

  return (
    <section id="fixed-header" className="x c12 xw xac xjb">
      <Link href="/" passHref>
        <a className="logo">
          <img src="/images/battery-logo.png" alt="Battery Agency Logo" />
        </a>
      </Link>

      <div onClick={expandHeader} className="nav-opener burger curp">
        <img src="/images/burger.svg" alt="burger svg" />
      </div>

      <style jsx>{`
        #fixed-header {
          padding: var(--gutter) var(--gutter-medium);
          filter: invert(1);
          position: absolute;
          width: 100vw;
          z-index: 4;
          top: 0;
          left: 0;
        }

        .nav-opener img {
          transition: 0.3s ease-out opacity;
        }

        .nav-opener:hover img {
          opacity: 0.5;
        }

        .logo {
          width: 100px;
        }
      `}</style>
    </section>
  );
};

export default FixedHeader;
