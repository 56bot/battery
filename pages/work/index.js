import WorkPage from "components/work";
import { makeGenericRequest } from "api/wp";

const Page = (props) => <WorkPage {...props} />;

export async function getServerSideProps() {
  const page = await makeGenericRequest(`projects?per_page=100`);

  return {
    props: {
      page,
    },
  };
}

export default Page;
