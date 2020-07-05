import CareerForm from "./CareerForm";

const CareerPost = ({ acf, title }) => {
  return (
    <section className="career-post mw-medium mxa">
      <header className="mw-small mxa">
        <h2 className="margin-bottom">{title.rendered}</h2>
        <div className="x xw">
          <div className="fsE">{acf.meta_info.availability}</div>
          <div className="fsE">{acf.meta_info.location}</div>
        </div>
      </header>
      <article className="mw-small mxa main-text">
        <span dangerouslySetInnerHTML={{ __html: acf.text }} />
      </article>
      <CareerForm />

      <style jsx>{`
        .career-post {
          padding: calc(var(--gutter-large) / 2);
          padding-bottom: 0;
        }

        .fsE {
          padding-right: var(--gutter);
        }

        .mw-small {
          padding: var(--gutter);
          padding-bottom: calc(var(--gutter-medium) * 2);
        }
      `}</style>
    </section>
  );
};

export default CareerPost;
