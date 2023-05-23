import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../../component/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import Contactitem from "./contactItem";
import styles from "./styles.module.scss";

export default function contact() {
  let items = [
    {
      title: "Facebook",
      content: "不太常用，但還是可以加一下",
      link: "https://www.facebook.com/profile.php?id=100006097394081&sk=about",
    },
    {
      title: "Github",
      content: "裡面有我專案的程式repo，歡迎參觀取用!",
      link: "https://github.com/LTN917",
    },
    {
      title: "Instagram",
      content: "這個還蠻常使用的，可以一窺我的生活",
      link: "https://www.instagram.com/ltnisgod/",
    },
    {
      title: "CodeBridge",
      content: "技術文章還有一些筆記，目前代表作為Defi-閃電貸的實作專案",
      link: "https://tw.coderbridge.com/@lcl25k10",
    },
    { title: "Gamil", content: "lcl25k10@gmail.com", link: "" },
    { title: "Phone", content: "0916515851", link: "" },
  ];
  return (
    <Layout>
      <div>
        <Head>
          <title>聯絡Bryan</title>
        </Head>
        <h1 className={styles.title}>聯絡Bryan</h1>
        {items.map((item, index) => (
          <Contactitem
            key={index}
            title={item.title}
            content={item.content}
            link={item.link}
          />
        ))}
      </div>
    </Layout>
  );
}
