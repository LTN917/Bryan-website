import Table from "react-bootstrap/Table";
import styles from "./styles.module.scss";

export default function Skills() {
  return (
    <div className={styles.skill}>
      <h1>技能</h1>
      <Table responsive="sm">
        <thead>
          <tr>
            <th>網頁技術</th>
            <th>項目</th>
            <th>工具/程式</th>
            <th>使用經驗描述</th>
            <th>相關作品</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>網頁前端</td>
            <td className={styles.icons}>HTML、CSS、JS、React、BootStrap</td>
            <td>
              早期使用html、css、js打造簡單的前端應用網站，包括flex切版還有RWD等效果，後期接觸到React、bootstrap、react-icons，使用部件還有第三方API讓前端開發更有效率跟美感
            </td>
            <td>
              個人網站舊版
              <br />
              個人網站新版 <br />
              日本旅遊網
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>網頁全端</td>
            <td className={styles.icons}>JS、Node.js、Next.js、TS</td>
            <td>
              使用Next.js快速搭建可應用的網站，並且利用像是API第三方套件，自動將Markdown文件轉換成可閱讀的網頁，在實作當中也理解網路設計架構像是CSR、SSR、SSG等原理
            </td>
            <td>
              個人網站新版 <br />
              podcast記事本網站 <br />
              Web3-kickstart網站
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>資料庫串聯</td>
            <td className={styles.icons}>MongoDB、MySQL</td>
            <td>
              利用mongoDB
              Atlas快速有效的管理網頁資料，另外也用過傳統的MySQL、SQLServer
            </td>
            <td>
              podcast記事本網站 <br />
              .Net MVC架構網路銀行
            </td>
          </tr>
        </tbody>
      </Table>
      <Table responsive="md">
        <thead>
          <tr>
            <th>Blockchain</th>
            <th>項目</th>
            <th>工具/程式</th>
            <th>使用經驗描述</th>
            <th>相關作品</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Web3應用</td>
            <td className={styles.icons}>
              JS、Next.js、Ethereum、Solidity、Blockchain
            </td>
            <td>
              運用乙太坊、智能合約程式語言Solidity、及區塊鏈知識打造可應用的區塊鏈應用
            </td>
            <td>Web3-kickstart網站</td>
          </tr>
          <tr>
            <td>2</td>
            <td>DeFi應用</td>
            <td className={styles.icons}>Ethereum、Solidity、Blockchain</td>
            <td>
              了解DeFi服務項目原理，並且運用第三方API和智能合約，搭配錢包來完成自動化的區塊鏈金融服務
            </td>
            <td>Flash Loan 閃電貸</td>
          </tr>
        </tbody>
      </Table>
      <Table responsive="lg">
        <thead>
          <tr>
            <th>DevOps</th>
            <th>項目</th>
            <th>工具/程式</th>
            <th>使用經驗描述</th>
            <th>相關作品</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>版本控制</td>
            <td className={styles.icons}>Github、Git、Vercel</td>
            <td>
              了解git flow
              、分支合併刪除等原理，整合本地端commit和github遠端commit，以達到版本控制，並用vercel等第三方網站持續部屬github上面的網頁repo
            </td>
            <td>除了小型作品幾乎都有用到</td>
          </tr>
          <tr>
            <td>2</td>
            <td>容器技術</td>
            <td className={styles.icons}>Docker、Kubernetes</td>
            <td>
              練習docker、k8s等技術讓團隊開發可以在同樣的環境下開發
              <br />
              docker - 可以創建network使container資源整合更好 <br />
              k8s -
              使用minicube啟動deployment、service來使用container中的服務並且使運行穩定
            </td>
            <td>練習階段</td>
          </tr>
          <tr>
            <td>3</td>
            <td>CI/CD</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
        </tbody>
      </Table>
      <Table responsive="lg">
        <thead>
          <tr>
            <th>遊戲開發</th>
            <th>項目</th>
            <th>工具/程式</th>
            <th>使用經驗描述</th>
            <th>相關作品</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Unity遊戲開發</td>
            <td className={styles.icons}>Unity、 C#</td>
            <td>使用unity開發動畫小遊戲</td>
            <td>英語單字口說小遊戲</td>
          </tr>
          <tr>
            <td>2</td>
            <td>pyGame</td>
            <td>python</td>
            <td>使用pygame套件的playground打造不同版本的貪食蛇小遊戲</td>
            <td>語音貪詞蛇</td>
          </tr>
        </tbody>
      </Table>
      <br />
    </div>
  );
}
