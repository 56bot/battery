import NewsArticle from "components/news/Article";
import { makeGenericRequest } from "api/wp";

const Page = (props) => <NewsArticle {...props.page} />;

export async function getServerSideProps(context) {
  const page = await makeGenericRequest(`news?slug=${context.query.news}`);

  return {
    props: { page: page[0] },
  };
}

export default Page;
