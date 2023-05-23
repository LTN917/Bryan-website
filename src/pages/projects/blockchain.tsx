import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import styles from "./styles.module.scss";

export default function BlockchainProject() {
  return (
    <>
      <h1 className={styles.title}>BlockChain Project</h1>
      <div className={styles.boxes}>
        <Card
          style={{ width: "18rem", height: "20rem" }}
          className={styles.card}
        >
          <Card.Body className={styles.part1}>
            <Card.Title className={styles.cardTitle2}>
              Web3-kickstartWeb
            </Card.Title>
            <Card.Text>
              以電子錢包的方式登入kickstart平台,
              可以發起募款籌措資金或是投資上面的項目,運行的區塊鏈架構是以太測試網路Goerli,並且搭配了React、Next.js等技術來搭建網站{" "}
            </Card.Text>
          </Card.Body>
          <ListGroup className={styles.part2}>
            <ListGroup.Item>
              Next.js、solidity、Ethereum、Metamask
            </ListGroup.Item>
          </ListGroup>
          <Card.Body className={styles.part3}>
            <Card.Link
              href="https://github.com/LTN917/Project-blockchain-Web3"
              className={styles.cardBtn}
            >
              Github
            </Card.Link>
          </Card.Body>
        </Card>
        <Card
          style={{ width: "18rem", height: "20rem" }}
          className={styles.card}
        >
          <Card.Body className={styles.part1}>
            <Card.Title className={styles.cardTitle2}>Defi-閃電貸</Card.Title>
            <Card.Text>
              閃電貸為去中心化金融中一種新型態的應用,透過solidity智能合約程式碼,連接Metamask虛擬貨幣錢包,串接API到Aave平台快速借貸,再到Uinswap套利
              ,原理跟實作方式都寫在部落格當中,歡迎點進去看看!
            </Card.Text>
          </Card.Body>
          <ListGroup className={styles.part2}>
            <ListGroup.Item>solidity、uniSwap、Aave</ListGroup.Item>
          </ListGroup>
          <Card.Body className={styles.part3}>
            <Card.Link
              href="https://tw.coderbridge.com/@lcl25k10/cd58e677b8e64521ad989a3057040db0"
              className={styles.cardBtn}
            >
              技術文章
            </Card.Link>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
