import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../component/Layout";
import Homepage from "./Homepage";
import styles from "./styles.module.scss";

export default function Home() {
  return (
    <div className={styles.bg}>
      <Head>
        <title>Byran Website</title>
        <meta charSet="utf-8" />
        <meta name="author" content="Byran" />
      </Head>
      <Layout>
        <Homepage />
      </Layout>
    </div>
  );
}
