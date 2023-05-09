import Image from "next/image";
import Link from "next/link";

export default function Homepage() {
  return (
    <div className="homepage-content bg-white dark:bg-black">
      <div className="homepage-info">
        <h1 className=" dark:text-white">Hi 我是Bryan !</h1>
        <p className=" dark:text-slate-400 ">
          目前就讀國立政治大學資管所
          研究領域為區塊鏈在個人資料存取限制的應用,技術部分為網頁全端、區塊鏈web3的應用,最近也在學習DevOps的相關知識
          大家可以看看我的作品集,或是點擊下方連結多了解我哦!
        </p>
      </div>
      <div className="homepage-photo">
        <Image
          src="/homepage.png"
          height={150}
          width={400}
          alt="homepage graph"
        />
      </div>
      <div className="homepage-button">
        <button>
          <Link href="about/">關於Bryan</Link>
        </button>
      </div>
    </div>
  );
}
