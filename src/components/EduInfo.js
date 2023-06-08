import React from "react";
import Container from "react-bootstrap/Container";
import Collapse from "react-bootstrap/Collapse";
import { Col, Row } from "react-bootstrap";

function EduInfo({ education, show }) {
  return (
    <Container className="infoCard">
      <Collapse in={show}>
        <div>
          <Row className="fs-3 text-decoration-underline fw-bold"></Row>
        </div>
      </Collapse>
    </Container>
  );
}

export default EduInfo;
