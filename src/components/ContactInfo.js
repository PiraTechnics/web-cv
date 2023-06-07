import { Component } from "react";
import Container from "react-bootstrap/Container";
import Collapse from "react-bootstrap/Collapse";
import { Col, Row } from "react-bootstrap";
import { BsTelephoneFill } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import { FaMapMarkedAlt } from "react-icons/fa";

class ContactInfo extends Component {
  render() {
    const data = this.props.data;
    const show = this.props.show;

    return (
      <Container className="infoCard">
        <Collapse in={show}>
          <div>
            <Row className="fs-3 text-decoration-underline fw-bold">
              <Col xs={2} className="text-center"></Col>
              <Col xs={10}>
                {data.firstName} {data.lastName}
              </Col>
            </Row>
            <Row className="fs-6">
              <Col xs={2} className="text-center">
                <BsTelephoneFill size={22} />
              </Col>
              <Col xs={10}>{data.phone}</Col>
            </Row>
            <Row className="fs-6">
              <Col xs={2} className="text-center">
                <IoIosMail size={26} />
              </Col>
              <Col xs={10}>{data.email}</Col>
            </Row>
            <Row className="fs-6">
              <Col xs={2} className="text-center">
                <FaMapMarkedAlt size={25} />
              </Col>
              <Col xs={10}>
                {data.addr1} {data.addr2}
              </Col>
            </Row>
            <Row className="fs-6">
              <Col xs={2} className="text-center"></Col>
              <Col xs={10}>
                {data.city} {data.usState} {data.zip}
              </Col>
            </Row>
          </div>
        </Collapse>
      </Container>
    );
  }
}

export default ContactInfo;
