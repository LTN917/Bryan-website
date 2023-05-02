export default function Homepage() {
  return (
    <div className="homepage-content">
      <div className="homepage-info">
        <h1>Hi 我是Bryan !</h1>
        <p>
          目前就讀國立政治大學資管所
          研究領域為區塊鏈在個人資料存取限制的應用,技術部分為網頁全端、區塊鏈web3的應用,最近也在學習DevOps的相關知識
          大家可以看看我的作品集,或是點擊下方連結多了解我哦!
        </p>
      </div>
      <div className="homepage-photo">
        <img src="..\img\homepage.png" alt="圖片未顯示" />
      </div>
      <div className="homepage-button">
        <button>關於Bryan</button>
      </div>
    </div>
  );
}
