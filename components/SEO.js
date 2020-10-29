import Head from "next/head";

const SEO = ({ acf, page }) => {
  let title = "Battery Agency";
  let desc = "";
  let img = null;

  console.log(page, "Page");
  if (page && page.title) title = page.title.rendered + " – " + title;

  if (acf.seo_title) title = acf.seo_title;
  if (acf.seo_description) desc = acf.seo_description;
  if (acf.seo_image) img = acf.seo_image;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={desc} />

      {/* <link rel="icon" type="image/png" href="/favicon.png" /> */}

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      {img && <meta property="og:image" content={img} />}
      <meta property="og:description" content={desc} />
      <meta property="og:site_name" content={"Battery Agency"} />

      <meta name="twitter:card" content={"summary_large_image"} />
      <meta name="twitter:creator" content="@individual_account" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={desc} />
      {img && <meta name="twitter:image" content={img} />}

      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={desc} />
      {img && <meta itemProp="image" content={img} />}
    </Head>
  );
};

export default SEO;
