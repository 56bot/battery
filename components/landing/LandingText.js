import LinkButton from "components/Link";

import { SlideUp } from "components/animations";

const LandingText = ({ text, learn_more_link }) => {
  return (
    <section className="landing-text c12">
      <div className="text">
        <SlideUp>
          <>
            <h2>{text}</h2>
            {learn_more_link && learn_more_link != "" && (
              <LinkButton href={learn_more_link}>Learn More</LinkButton>
            )}
          </>
        </SlideUp>
      </div>

      <style jsx>{`
        .landing-text {
          margin-top: calc(var(--gutter-medium) * 2);
          margin-bottom: calc(var(--gutter-medium) * 2);
        }

        h2 {
          margin-bottom: calc(var(--gutter) / 1.4);
        }

        .text {
          padding: var(--gutter);
          margin: auto;
          max-width: 700px;
        }

        @media (max-width: 800px) {
          .landing-text {
            margin-top: calc(var(--gutter-medium) * 1);
            margin-bottom: calc(var(--gutter-medium) * 1);
          }
        }
      `}</style>
    </section>
  );
};

export default LandingText;
