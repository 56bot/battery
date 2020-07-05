import Homepage from "components/landing";
import { makeGenericRequest } from "api/wp";

const Page = (props) => <Homepage {...props} />;

export async function getStaticProps(context) {
  const page = await makeGenericRequest(`pages?slug=homepage`);
  return {
    props: {
      page: page[0],
    },
  };
}

export default Page;
