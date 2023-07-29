import { categories } from "../../dummyData/categoriesData.js";
import { Row, Col } from "react-bootstrap";
import CategoryCard from "../../component/CategoryCard.js";
import "../../style/Home.css";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const nevigate = useNavigate();

  const selectCategory = (category) => {
    nevigate(`/videosList/${category.category}`);
  };

  return (
    <div>
      <div className="title">Categories</div>
      <Row xs={1} md={4}>
        {categories.map((category, index) => {
          return (
            <Col key={index} onClick={() => selectCategory(category)}>
              <CategoryCard category={category} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
