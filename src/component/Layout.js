import LeftSideBar from "./LeftSidebar";
import RightSideBar from "./RightSidebar";
import { Container, Row, Col } from "react-bootstrap";
import { useParams, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Layout(props) {
  const { category, id } = useParams();
  const location = useLocation();

  console.log("layout", category, id, location, props);
  useEffect(() => {}, [location?.pathname]);
  return (
    <>
      <Container fluid>
        {/* <Row>
          <Col md={3}>
            <LeftSideBar />
          </Col>
          <Col md={9}>{props.children}</Col>
        </Row> */}
        <div className="me-0 d-flex">
          <div>
            <LeftSideBar />
          </div>
          <div className="component"> {props.children}</div>
          {id && (
            <div>
              <RightSideBar />
            </div>
          )}
        </div>
      </Container>
    </>
  );
}
