import ProjectArticle from "components/project/Article";
import { makeGenericRequest } from "api/wp";

const Page = (props) => <ProjectArticle {...props.page} />;

export async function getServerSideProps(context) {
  const page = await makeGenericRequest(
    `projects?slug=${context.query.project}`
  );

  return {
    props: { page: page[0] },
  };
}

export default Page;
