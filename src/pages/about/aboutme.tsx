import Image from "next/image";

export default function aboutme() {
  return (
    <div>
      <h1>關於Bryan</h1>
      <p>
        大家好我是來自基隆的Bryan,正在政大資管所研讀當中,目前正在研究區塊鏈在身分識別及知情同意上的應用,目前正在研究區塊鏈在身分識別及知情同意上的應用。
        在中正大一的必修課計算機概論我接觸到了C語言,讓原本是企管系的我對程式產生了濃厚的興趣,大二後便雙主修精進自己在程式方面的學習,也在大三的時候參加coding101的比賽,以語音辨識搭配Unity製作語音辨識小遊戲,在100多個參賽隊伍中拿到了創新應用獎。
        進了研究所之後繼續精進自己資訊方面的實力,近期正在學習DevOps和Docker、K8s等觀念以及技術。
      </p>
      <Image src="/aboutme.jpg" height={200} width={200} alt="aboutme graph" />
    </div>
  );
}
