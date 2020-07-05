import WorkPage from "components/work";
import { makeGenericRequest } from "api/wp";

const Page = (props) => <WorkPage {...props} />;

export async function getStaticProps() {
  const page = await makeGenericRequest(`projects`);

  return {
    props: {
      page,
    },
  };
}

export default Page;
