import LeftSideBar from "./LeftSidebar";
import RightSideBar from "./RightSidebar";
import { Container, Row, Col } from "react-bootstrap";
import { useParams, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Layout(props) {
  const { id } = useParams();

  
  return (
    <>
      <Container fluid>        
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
