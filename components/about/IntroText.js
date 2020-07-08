import { SlideUp } from "components/animations";

const IntroText = ({ our_story }) => {
  return (
    <section className="intro-text mxa mw-small main-text">
      <SlideUp>
        <span dangerouslySetInnerHTML={{ __html: our_story }} />
      </SlideUp>

      <style jsx>{`
        section {
          padding: calc(var(--gutter-medium) * 3) var(--gutter);
        }

        @media (max-width: 750px) {
          section {
            padding: calc(var(--gutter) * 2) var(--gutter);
            padding-bottom: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default IntroText;
