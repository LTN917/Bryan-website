import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import styles from "./styles.module.scss";

export default function WebProject() {
  return (
    <>
      <h1 className={styles.title}>Web Project</h1>
      <div className={styles.boxes}>
        <Card
          style={{ width: "18rem", height: "20rem" }}
          className={styles.card}
        >
          <Card.Body>
            <Card.Title>個人網頁舊版</Card.Title>
            <Card.Text>
              當初主要是練習css的flex排版的小專題，後來用擴充成一個簡單的小小個人網站，並且用第三方網站Netify部屬，可以藉由給定的URL來拜訪網站
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>HTML、CSS、JS、bootstrap、netify</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link href="https://github.com/LTN917/personalWeb-old-Version">
              Github
            </Card.Link>
            <Card.Link href="https://clever-biscuit-03d916.netlify.app/">
              Visit
            </Card.Link>
          </Card.Body>
        </Card>
        <Card
          style={{ width: "18rem", height: "20rem" }}
          className={styles.card}
        >
          <Card.Body>
            <Card.Title>個人網頁新版</Card.Title>
            <Card.Text>
              利用next.js全端技術，以及file system
              routing的功能，打造更全面實用的個人網站，其中用git、github做到版本控制，並且藉由第三方網站vercel連接到github的repo，做到持續部屬
              (CD)
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>
              Typescript、Next.js、git、github、vercel
            </ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Github</Card.Link>
            <Card.Link href="#">Visit</Card.Link>
          </Card.Body>
        </Card>
        <Card
          style={{ width: "18rem", height: "20rem" }}
          className={styles.card}
        >
          <Card.Body>
            <Card.Title>日本旅遊網</Card.Title>
            <Card.Text>
              練習z-index，css排版以及bootstrap、icon等美編小工具做的練習小網站
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>HTML、CSS、bootstrap</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link href="https://github.com/LTN917/Project-fullstack2">
              Github
            </Card.Link>
            <Card.Link href="https://visionary-sorbet-7f52b7.netlify.app/">
              Visit
            </Card.Link>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
