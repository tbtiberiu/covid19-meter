import Head from "next/head";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Covid-19 Meter</title>
        <link rel="icon" href="/covid19-logo.png" />
      </Head>
      <Component {...pageProps} />
      <footer>
        <p>&copy; Made with 💙 by Boșcan Tiberiu-Ioan</p>
      </footer>
    </>
  );
}

export default MyApp;
