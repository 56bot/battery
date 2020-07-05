import Link from "next/link";

const InternalLink = ({ children, href }) => {
  return (
    <div>
      <Link href={href} passHref>
        <a>
          {children} ----{`>>>>`}
        </a>
      </Link>
    </div>
  );
};

export default InternalLink;
