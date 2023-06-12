import React from "react";
import Container from "react-bootstrap/Container";
import Collapse from "react-bootstrap/Collapse";
import { Col, Row } from "react-bootstrap";
import { FaUniversity } from "react-icons/fa";
import { GiDiploma } from "react-icons/gi";
import { BsFillCalendar2RangeFill } from "react-icons/bs";

function EduInfo({ education, show }) {
  return (
    <Container className="infoCard">
      <Collapse in={show}>
        <div>
          <Row className="fs-3 text-decoration-underline fw-bold">
            <Col xs={2} className="text-center"></Col>
            <Col xs={10}>{capitalize(education.level)}</Col>
          </Row>
          <Row className="fs-6 py-1">
            <Col xs={2} className="text-center">
              <GiDiploma size={35} />
            </Col>
            <Col xs={10} className="fs-5 fw-bold">
              {capitalize(education.degree)} in {education.field}
            </Col>
          </Row>
          <Row className="fs-6 py-1">
            <Col xs={2} className="text-center">
              <FaUniversity size={30} />
            </Col>
            <Col xs={10}>{education.school}</Col>
          </Row>
          <Row className="fs-6 py-1 pb-2">
            <Col xs={2} className="text-center">
              <BsFillCalendar2RangeFill size={25} />
            </Col>
            <Col xs={10}>
              {getYear(education.dateFrom)} - {getYear(education.dateTo)}
            </Col>
          </Row>
        </div>
      </Collapse>
    </Container>
  );
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function getYear(dateString) {
  return new Date(dateString).getFullYear();
}

export default EduInfo;
