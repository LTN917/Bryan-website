import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../../component/Layout";
import Aboutme from "./aboutme";
import Introbox from "./introBox";
import Skill from "./skill";

export default function about() {
  return (
    <div>
      <Head>
        <title>關於Bryan</title>
      </Head>
      <Layout>
        <Aboutme />
        <Introbox />
        <Skill />
      </Layout>
    </div>
  );
}
