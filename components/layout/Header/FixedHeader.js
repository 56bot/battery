import Link from "next/link";
import { useEffect, useState } from "react";

const FixedHeader = ({ setHeaderExpanded }) => {
  const [scrolledABit, setScrolledABit] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let prevScrollPoint = 0;
    const handleHeader = () => {
      if (window.scrollY >= 200) {
        if (window.scrollY > prevScrollPoint) {
          setHidden(true);
        } else {
          setHidden(false);
        }

        prevScrollPoint = window.scrollY;
      }

      if (window.scrollY >= 50) {
        setScrolledABit(true);
      } else {
        setScrolledABit(false);
      }
    };

    window.addEventListener("scroll", handleHeader);
    handleHeader();

    return () => {
      window.removeEventListener("scroll", handleHeader);
    };
  }, []);

  const expandHeader = () => {
    setHeaderExpanded(true);
  };

  return (
    <section
      id="fixed-header"
      className={`x c12 xw xac xjb hidden-${hidden} scrolled-${scrolledABit}`}
    >
      <Link href="/" passHref>
        <a className="logo">
          <img src="/images/battery-logo.png" alt="Battery Agency Logo" />
        </a>
      </Link>

      <div onClick={expandHeader} className="nav-opener burger curp">
        <img src="/images/burger.svg" alt="burger svg" />
      </div>

      <style jsx global>{`
        #fixed-header.scrolled-true {
          background-color: white;
        }

        #fixed-header.scrolled-true.hidden-true {
          transform: translateY(-100px);
        }

        #fixed-header.scrolled-true img,
        main.default #fixed-header img {
          filter: invert(1);
        }
      `}</style>

      <style jsx>{`
        #fixed-header {
          transition: 0.2s ease-out background-color, 0.3s ease-out transform;
          padding: var(--gutter) var(--gutter-medium);
          position: fixed;
          width: 100vw;
          z-index: 4;
          top: 0;
          left: 0;
        }

        #fixed-header.scrolled-true {
          transition: 0.4s ease-out background-color, 0.5s ease-out transform;
        }

        .nav-opener:active img {
          transform: scale(0.8);
        }

        .nav-opener img {
          transition: 0.3s ease-out opacity, 0.3s ease-out transform;
        }

        .nav-opener:hover img {
          opacity: 0.5;
        }

        .scrolled-true img {
          transition: 0.3s ease-out filter;
        }
        img {
          transition: 0.2s ease-out filter;
        }

        .logo {
          width: 100px;
        }
      `}</style>
    </section>
  );
};

export default FixedHeader;
