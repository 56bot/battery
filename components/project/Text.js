const Text = ({ text }) => (
  <section className={`text main-text image mw-small mxa`}>
    <div className="c12">
      <span dangerouslySetInnerHTML={{ __html: text }} />
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
