import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../../component/Layout";
import { getSortedPostsData } from "../../../lib/posts";

//server端在page build up 期間先抓取好外部資料
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Projects({ allPostsData }) {
  return (
    <Layout>
      <div>
        <Head>
          <title>專案作品</title>
        </Head>
        <h1>this is projects page!</h1>
        <section>
          <h2>Blog</h2>
          <ul>
            {allPostsData.map(({ id, date, title }) => (
              <li key={id}>
                {title}
                <br />
                {id}
                <br />
                {date}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </Layout>
  );
}
