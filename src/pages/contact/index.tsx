import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../../component/Layout";

export default function contact() {
  return (
    <Layout>
      <div>
        <Head>
          <title>聯絡Bryan</title>
        </Head>
        <h1>this is a contact page!</h1>
      </div>
    </Layout>
  );
}
