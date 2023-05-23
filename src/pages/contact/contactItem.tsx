import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Link from "next/link";
import styles from "./styles.module.scss";

export default function contactItem(props: any) {
  return (
    <div>
      <Card className={styles.card}>
        <Card.Header className={styles.cardTitle}>{props.title}</Card.Header>
        <Card.Body>
          <Card.Text className={styles.cardText}>{props.content} </Card.Text>
          {props.link ? (
            <Link href={props.link}>
              <Button variant="primary" disabled>
                Visit
              </Button>
            </Link>
          ) : (
            <Button variant="primary">Visit</Button>
          )}
        </Card.Body>
      </Card>
      <br />
    </div>
  );
}
