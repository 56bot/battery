import CareersPage from "components/careers";
import { makeGenericRequest } from "api/wp";

const Page = (props) => <CareersPage {...props} />;

export async function getStaticProps() {
  const page = await makeGenericRequest(`pages?slug=careers`);

  return {
    props: {
      page: page[0],
    },
  };
}

export default Page;
