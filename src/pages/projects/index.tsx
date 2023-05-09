import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../../component/Layout";

export default function projects() {
  return (
    <Layout>
      <div>
        <Head>
          <title>專案作品</title>
        </Head>
        <h1>this is projects page!</h1>
      </div>
    </Layout>
  );
}
