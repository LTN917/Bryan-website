import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import styles from "./styles.module.scss";

export default function OtherProject() {
  return (
    <>
      <h1 className={styles.title}>Other Project</h1>
      <div className={styles.boxes}>
        <Card
          style={{ width: "18rem", height: "20rem" }}
          className={styles.card}
        >
          <Card.Body className={styles.part1}>
            <Card.Title className={styles.cardTitle3}>
              python語音貪食蛇
            </Card.Title>
            <Card.Text>
              使用pygame打造,依照紅藍黃綠四種模式,擺脫貪食蛇單純上下左右操作的遊戲方式
              其中綠色-語音辨識模式更是要正確唸出英文單字才能通過,增加遊戲的可玩性
            </Card.Text>
          </Card.Body>
          <ListGroup className={styles.part2}>
            <ListGroup.Item>
              python、pygame、window-speakRecogization
            </ListGroup.Item>
          </ListGroup>
          <Card.Body className={styles.part3}>
            <Card.Link
              href="https://github.com/LTN917/Project-others1"
              className={styles.cardBtn}
            >
              Github
            </Card.Link>
            <Card.Link
              href="https://clever-biscuit-03d916.netlify.app/image_others/1..mp4"
              className={styles.cardBtn}
            >
              Video
            </Card.Link>
          </Card.Body>
        </Card>
        <Card
          style={{ width: "18rem", height: "20rem" }}
          className={styles.card}
        >
          <Card.Body className={styles.part1}>
            <Card.Title className={styles.cardTitle3}>
              Unity英文口說小遊戲
            </Card.Title>
            <Card.Text>
              此為我們團隊參加2021coding101的比賽作品,利用Unity搭配C#腳本,還有語音辨識系統,
              打造一款以可愛簡潔畫風的英語單字口說小遊戲。
              (影片是我配音的是有點害羞...)
            </Card.Text>
          </Card.Body>
          <ListGroup className={styles.part2}>
            <ListGroup.Item>Unity、C#、window-speakRecogization</ListGroup.Item>
          </ListGroup>
          <Card.Body className={styles.part3}>
            <Card.Link
              href="https://github.com/LTN917/Project-others2"
              className={styles.cardBtn}
            >
              Github
            </Card.Link>
            <Card.Link
              href="https://www.youtube.com/watch?v=x7wTwit5PVw"
              className={styles.cardBtn}
            >
              Video
            </Card.Link>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
