import Head from "next/head";

function indexHead() {
  return (
    <div>
      <Head>
        <title>Joseph Mallari's Website</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/static/favicon.ico" />
      </Head>
    </div>
  );
}

export default indexHead;