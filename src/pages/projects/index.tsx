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
        <h1>Web Project</h1>
        <Web />
        <h1>BlockChain Project</h1>
        <Blockchain />
        <h1>Other Project</h1>
        <Others />
      </div>
      <br /> <br /> <br />
    </Layout>
  );
}
