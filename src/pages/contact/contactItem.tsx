import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Link from "next/link";

export default function contactItem(props: any) {
  return (
    <div>
      <Card>
        <Card.Header>{props.title}</Card.Header>
        <Card.Body>
          <Card.Text>{props.content} </Card.Text>
          {props.link ? (
            <Link href={props.link}>
              <Button variant="primary">Visit</Button>
            </Link>
          ) : (
            <Button variant="primary" disabled>
              Visit
            </Button>
          )}
        </Card.Body>
      </Card>
      <br />
    </div>
  );
}
