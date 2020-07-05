import Link from "next/link";
export const CosmeticLink = ({ children }) => (
  <div>
    <span className="children">{children}</span>
    <span className="arr">{`→`}</span>

    <style jsx>{`
      div {
        padding-left: 45px;
        display: inline-block;
      }

      div:hover .arr {
        transform: translateX(6px);
      }
      .arr {
        pointer-events: none;
        transition: 0.3s ease-out transform;
        display: inline-block;
        padding-left: 4px;
      }
    `}</style>
  </div>
);

const InternalLink = ({ children, href }) => {
  return (
    <div>
      <Link href={href} passHref>
        <a className="fsE">
          <span className="children">{children}</span>
          <span className="arr">{`→`}</span>
        </a>
      </Link>

      <style jsx>{`
        a {
          padding-left: 45px;
          display: inline-block;
        }

        a:hover .arr {
          transform: translateX(6px);
        }
        .arr {
          pointer-events: none;
          transition: 0.3s ease-out transform;
          display: inline-block;
          padding-left: 4px;
        }
      `}</style>
    </div>
  );
};

export default InternalLink;
