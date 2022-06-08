import { AppProps } from "next/app";
import Head from "next/head";
import Layout from "../components/layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>Among us</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
