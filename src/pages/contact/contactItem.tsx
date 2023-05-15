import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Link from "next/link";

export default function contactItem(props: any) {
  return (
    <Card>
      <Card.Header>{props.title}</Card.Header>
      <Card.Body>
        <Card.Text>{props.content} </Card.Text>
        <Button>
          <Link href={props.link}>Visit</Link>
        </Button>
      </Card.Body>
    </Card>
  );
}
