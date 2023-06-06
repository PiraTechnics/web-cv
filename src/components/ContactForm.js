import React, { Component } from "react";
import "../styles/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ContactInfo from "./ContactInfo";

class ContactForm extends Component {
  constructor() {
    super();

    this.state = {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      addr1: "",
      addr2: "",
      city: "",
      state: "",
      zip: "",
      showContactInfo: false,
    };

    this.handleChange.bind(this);
    this.handleSubmit.bind(this);
    this.handleReset.bind(this);
  }

  resetForm = () => {
    this.setState({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      addr1: "",
      addr2: "",
      city: "",
      state: "",
      zip: "",
      showContactInfo: false,
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleReset = (e) => {
    e.preventDefault();
    this.resetForm();
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.setState({
      showContactInfo: true,
    });
    //call the function/component to show the finished contact info here
    //this.resetForm();
  };

  render() {
    const {
      firstName,
      lastName,
      phone,
      email,
      addr1,
      addr2,
      city,
      usState,
      zip,
      showContactInfo,
    } = this.state;

    return (
      <>
        <Container className="inputGroup my-3">
          <h2 className="text-center">Contact</h2>
          <hr className="solid my-1" />
          <Form onSubmit={this.handleSubmit} onReset={this.handleReset}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  value={firstName}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  value={lastName}
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} className="mb-3" controlId="formPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  value={phone}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group as={Col} className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                  placeholder="person@mailserver.com"
                />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group className="mb-3" controlId="formAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  name="addr1"
                  value={addr1}
                  onChange={this.handleChange}
                  placeholder="1234 Main Street"
                />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group className="mb-3" controlId="formAddress2">
                <Form.Label>Address 2</Form.Label>
                <Form.Control
                  type="text"
                  name="addr2"
                  value={addr2}
                  onChange={this.handleChange}
                  placeholder="Apartment, Studio, Floor"
                />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} className="mb-3" controlId="formCity">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  name="city"
                  value={city}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group as={Col} className="mb-3" controlId="formState">
                <Form.Label>State</Form.Label>
                <Form.Select
                  aria-label="Select State"
                  name="usState"
                  value={usState}
                  onChange={this.handleChange}
                >
                  <option>Select State</option>
                  <option value="California">California</option>
                  <option value="Colorado">Colorado</option>
                </Form.Select>
              </Form.Group>
              <Form.Group as={Col} className="mb-3" controlId="formZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control
                  type="text"
                  name="zip"
                  value={zip}
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Row>
            <div className="mb-2">
              <Button
                className="me-3"
                variant="outline-secondary"
                type="submit"
              >
                Submit
              </Button>
              <Button className="me-3" variant="outline-secondary" type="reset">
                Reset
              </Button>
            </div>
          </Form>
        </Container>
        <ContactInfo
          show={showContactInfo}
          data={{
            firstName: firstName,
            lastName: lastName,
            phone: phone,
            email: email,
            addr1: addr1,
            addr2: addr2,
            city: city,
            usState: usState,
            zip: zip,
          }}
        />
      </>
    );
  }
}

export default ContactForm;
