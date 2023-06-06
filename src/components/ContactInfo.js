import { Component } from "react";
import Container from "react-bootstrap/Container";
import Collapse from "react-bootstrap/Collapse";

class ContactInfo extends Component {
  render() {
    const data = this.props.data;
    const show = this.props.show;

    return (
      <Container className="inputGroup">
        <Collapse in={show}>
          <div>
            <div className="label">
              <div className="fs-4">
                Name: {data.firstName} {data.lastName}
              </div>
              <div className="fs-5">Phone: {data.phone}</div>
              <div className="fs-5">Email: {data.email}</div>
            </div>
          </div>
        </Collapse>
      </Container>
    );
  }
}

export default ContactInfo;
