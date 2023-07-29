import { Card } from "react-bootstrap";
import "../style/CategoryCard.css";
export default function CategoryCard(props) {
  const { category } = props;
  return (
    <Card className="categoryCard">
      <Card.Img variant="top" src={category.thumbnail} />
      <Card.Body>
        <Card.Title>{category.category}</Card.Title>
      </Card.Body>
    </Card>
  );
}
