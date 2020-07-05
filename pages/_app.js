import "../css/reset.css";
import "../css/fonts.css";
import "../css/main.css";

import Layout from "components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
