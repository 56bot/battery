import { SlideUp } from "components/animations";

const Text = ({ text }) => (
  <section className={`text main-text image mw-small mxa`}>
    <div className="c12">
      <SlideUp>
        <span dangerouslySetInnerHTML={{ __html: text }} />
      </SlideUp>
    </div>

    <style jsx>{`
      section {
        padding: var(--gutter-medium);
        padding-bottom: 0;
        margin-bottom: calc(var(--gutter-medium) * 2);
      }
    `}</style>
  </section>
);

export default Text;
