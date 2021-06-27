import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "DEV Community 👨‍💻👨‍💻",
  keywords: "Nextjs, Charkra-UI, React",
  description: "Dev.to clone build by Muhammad Ahmad"
};

export default Meta;
