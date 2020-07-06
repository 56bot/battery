import AboutPage from "components/about";
import { makeGenericRequest } from "api/wp";

const Page = (props) => <AboutPage {...props} />;

export async function getStaticProps(context) {
  const page = await makeGenericRequest(`pages?slug=about`);
  return {
    props: {
      page: page[0],
    },
  };
}

export default Page;
