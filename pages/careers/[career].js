import CareerPost from "components/careers/CareerPost";
import { makeGenericRequest } from "api/wp";

const Page = (props) => <CareerPost {...props.page} />;

export async function getServerSideProps(context) {
  const page = await makeGenericRequest(`careers?slug=${context.query.career}`);

  return {
    props: { page: page[0] },
  };
}

export default Page;
