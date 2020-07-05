import Link from "next/link";

const CareerLink = ({ post_name, acf, post_title }) => {
  const { meta_info } = acf;
  console.log(acf, "acf");
  return (
    <div>
      <Link href="/careers/[career]" as={`/careers/${post_name}`} passHref>
        <a className="x xw fsE">
          <div className="c6">{post_title}</div>
          <div className="c6 x xw">
            <div className="c6">{meta_info.availability}</div>
            <div className="c6 x xjb">
              {meta_info.location} <span>{`→`}</span>
            </div>
          </div>
        </a>
      </Link>

      <style jsx>{`
        a {
          width: 100%;
          border: 1px solid rgba(0, 0, 0, 0.2);
          margin-bottom: calc(var(--gutter) / 1.25);
          padding: calc(var(--gutter) * 1.2);
          transition: 0.3s ease-out border-color;
        }

        span {
          text-align: right;
          display: inline-block;
        }

        a:hover {
          border: 1px solid rgba(0, 0, 0, 0.6);
        }
      `}</style>
    </div>
  );
};

const CareerList = ({ careers }) => {
  return (
    <section className="careers-list">
      {careers.map((c) => (
        <CareerLink {...c} key={c.ID} />
      ))}
      {careers.map((c) => (
        <CareerLink {...c} key={c.ID} />
      ))}
      {careers.map((c) => (
        <CareerLink {...c} key={c.ID} />
      ))}
      {careers.map((c) => (
        <CareerLink {...c} key={c.ID} />
      ))}
      {careers.map((c) => (
        <CareerLink {...c} key={c.ID} />
      ))}
      {careers.map((c) => (
        <CareerLink {...c} key={c.ID} />
      ))}
      {careers.map((c) => (
        <CareerLink {...c} key={c.ID} />
      ))}
      {careers.map((c) => (
        <CareerLink {...c} key={c.ID} />
      ))}

      <style jsx>{`
        .careers-list {
          margin-bottom: calc(var(--gutter-medium) * 3);
        }
      `}</style>
    </section>
  );
};

export default CareerList;
