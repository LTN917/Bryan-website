//https://react-bootstrap.github.io/components/table/

import Table from "react-bootstrap/Table";
import styles from "./styles.module.scss";

export default function introBox() {
  return (
    <div className={styles.introBox}>
      <h1>簡介</h1>
      <Table striped bordered hover variant="dark">
        <tbody>
          <tr>
            <td>學歷</td>
            <td>國立中正大學 資訊管理學系 國立政治大學 資訊管理所 - 科技組</td>
          </tr>
          <tr>
            <td>競賽</td>
            <td>
              2021年 Coding101 - 創新應用獎 (100多組中第7名)
              以Unity及Microsoft語音辨識系統,打造英語口說的闖關遊戲
            </td>
          </tr>
          <tr>
            <td>語言</td>
            <td colSpan={2}>TOIEC : 790 Listening : 395 Reading : 395</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
