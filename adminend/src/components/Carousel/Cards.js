import { Card } from "react-bootstrap";

const Cards = () => {
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>Card content</Card.Text>
          <button variant="primary">Button</button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Cards;
