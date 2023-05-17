import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../../component/Layout";
import Web from "./web";
import Blockchain from "./blockchain";
import Others from "./others";

export default function Projects() {
  return (
    <Layout>
      <div>
        <Head>
          <title>專案作品</title>
        </Head>
        <Web />
        <Blockchain />
        <Others />
      </div>
      <br /> <br /> <br />
    </Layout>
  );
}
