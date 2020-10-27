import Cover from "components/layout/Cover";

import CareersCTA from "./CareersCTA";
import IntroText from "./IntroText";
import ContactCTA from "./ContactCTA";
import OurClients from "./OurClients";
import Work from "./Work";

const About = ({ page }) => {
  const { acf } = page;
  return (
    <section id="page--about">
      <Cover meta_info={acf.meta_info} />
      <IntroText our_story={acf.our_story} />
      <CareersCTA {...acf.careers_cta} />
      <Work work={acf.work_cta} />

      <OurClients clients={acf.clients} />
      <ContactCTA />
    </section>
  );
};

export default About;
