import Head from "next/head";

function indexHead() {
  return (
    <div>
      <Head>
        <title>Joseph Mallari's Website</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:image" content="/static/chrome.png" />
        <meta property="og:title" content="Joseph Mallari's portfolio" />
        <meta property="og:description" content="Portfolio of Joseph Mallari" />
        <meta property="og:url" content="https://josephmallari.com" />
        <link rel="shortcut icon" href="/static/favicon.ico" />
      </Head>
    </div>
  );
}

export default indexHead;
