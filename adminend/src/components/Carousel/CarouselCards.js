import styles from "./CarouselCards.module.css";
import { Carousel, Card, Button, Row } from "react-bootstrap";
import { Link, Route } from "react-router-dom";
import ReviewSubmission from "../../pages/ReviewSubmission/ReviewSubmission";

const CarouselCards = (props) => {
  const cards = [];
  const projects = props.projects;
  const prevIcon = (
    <Button variant="dark">
      <span className="carousel-control-prev-icon" aria-hidden="true" />
    </Button>
  );

  const nextIcon = (
    <Button variant="dark">
      <span className="carousel-control-next-icon" aria-hidden="true" />
    </Button>
  );
  for (let i = 0; i < projects.length; ++i) {
    cards.push(
      <div className="col-4" key={i}>
        <Link to={`/review-submission/${projects[i].id}`} className={styles.cards}>
          <Card className={styles.card}>
            <Card.Body>
              <Card.Title className={styles.cardTitle}>{projects[i].title}</Card.Title>
            </Card.Body>
          </Card>
        </Link>
      </div>
    );
  }

  return (
    <Carousel
      className={styles.carousel}
      style={{ width: "80%" }}
      indicators={false}
      prevIcon={prevIcon}
      nextIcon={nextIcon}
      prevLabel=""
      nextLabel=""
    >
      <Carousel.Item style={{ paddingLeft: "50px", paddingRight: "50px" }}>
        <Row className="justify-content-center">{cards.slice(0, 3)}</Row>
      </Carousel.Item>
      <Carousel.Item style={{ paddingLeft: "50px", paddingRight: "50px" }}>
        <Row className="justify-content-center">{cards.slice(3, 6)}</Row>
      </Carousel.Item>
      <Carousel.Item style={{ paddingLeft: "50px", paddingRight: "50px" }}>
        <Row className="justify-content-center">{cards.slice(6, 9)}</Row>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselCards;
