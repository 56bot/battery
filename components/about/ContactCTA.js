import { CTA } from "components/careers";

const ContactCTA = () => {
  return (
    <section className="contact-cta COPY  mw-small mxa">
      <CTA title={"Got a project in mind?"} />

      <style jsx>{`
        section {
          padding: calc(var(--gutter-large) / 2) var(--gutter-medium);
        }
      `}</style>
    </section>
  );
};

export default ContactCTA;
