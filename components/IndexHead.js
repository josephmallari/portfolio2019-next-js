import Head from "next/head";

function indexHead() {
  return (
    <div>
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-71907935-2"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
s
      gtag('config', 'UA-71907935-2');`
          }}
        />
        <title>Joseph Mallari's Website</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/static/favicon.ico" />
      </Head>
    </div>
  );
}

export default indexHead;
