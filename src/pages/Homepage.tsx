import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";

export default function Homepage() {
  return (
    <div className={styles.homepage_content}>
      <div className={styles.homepage_info}>
        <h1 className=" dark:text-white">Hi 我是Bryan !</h1>
        <p className=" dark:text-slate-400 ">
          目前就讀國立政治大學資管所
          研究領域為區塊鏈在個人資料存取限制的應用,技術部分為網頁全端、區塊鏈web3的應用,最近也在學習DevOps的相關知識
          大家可以看看我的作品集,或是點擊下方連結多了解我哦!
        </p>
        <button>
          <Link href="about/">關於Bryan</Link>
        </button>
      </div>
      <Image
        className={styles.homepage_photo}
        src="/homepage.png"
        height={100}
        width={530}
        alt="homepage graph"
      />
      <br />
      <br />
    </div>
  );
}
