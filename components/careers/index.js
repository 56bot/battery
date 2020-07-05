import Link from "next/link";

import Cover from "components/layout/Cover";
import CareerList from "./CareerList";
import { CosmeticLink } from "components/Link";

const CTA = () => {
  return (
    <section className="career-cta">
      <a href="mailto:hello@batteryagency.com" className="curp">
        <h2 className="margin-bottom">Have a question?</h2>
        <CosmeticLink>Get in touch</CosmeticLink>
      </a>

      <style jsx>{`
        a {
          display: block;
        }
        .career-cta {
          padding: calc(var(--gutter-medium) * 2) 0;
        }
      `}</style>
    </section>
  );
};

const Careers = ({ page }) => {
  const { acf } = page;

  return (
    <div id="page--careers">
      <Cover meta_info={acf.meta_info} />

      <div className="career-content mw-small mxa">
        <CareerList careers={acf.careers} />
        <CTA />
      </div>

      <style jsx>{`
        .career-content {
          padding: calc(var(--gutter-large) / 2) var(--gutter-medium);
          margin: auto;
        }
      `}</style>
    </div>
  );
};

export default Careers;
