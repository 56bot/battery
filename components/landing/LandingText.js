import LinkButton from "components/Link";

const LandingText = ({ text, learn_more_link }) => {
  return (
    <section className="landing-text c12">
      <div className="text">
        <h2>{text}</h2>
        {learn_more_link && learn_more_link != "" && (
          <LinkButton href={learn_more_link}>Learn More</LinkButton>
        )}
      </div>

      <style jsx>{`
        .landing-text {
          margin-top: 50px;
          margin-bottom: 50px;
        }

        h2 {
          margin-bottom: calc(var(--gutter) / 1.4);
        }

        .text {
          padding: var(--gutter);
          margin: auto;
          max-width: 700px;
        }
      `}</style>
    </section>
  );
};

export default LandingText;
