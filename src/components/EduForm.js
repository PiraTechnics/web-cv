import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function EduForm() {
  const [education, setEducation] = useState({
    level: "",
    school: "",
    degree: "",
    field: "",
    dateFrom: new Date().toLocaleString(),
    dateTo: new Date().toLocaleString(),
    graduated: false,
  });

  function handleChange(e) {
    setEducation({
      ...education,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("you did it!");
  }

  return (
    <Container className="inputGroup my-3">
      <h2 className="text-center">Education</h2>
      <hr className="solid my-1" />
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formEduLevel">
            <Form.Label>Education Level</Form.Label>
            <Form.Select
              aria-label="Education Level"
              name="level"
              value={education.level}
              onChange={handleChange}
              required
            >
              <option value="Select">--- Select Education Level --- </option>
              <option value="university">University</option>
              <option value="trade school">Trade School</option>
              <option value="high school">High School</option>
              <option value="n/a">N/A</option>
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} controlId="formSchool">
            <Form.Label>Name of Institution</Form.Label>
            <Form.Control
              type="text"
              name="school"
              value={education.school}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formDegree">
            <Form.Label>Degree</Form.Label>
            <Form.Select
              aria-label="Degree Type"
              name="degree"
              value={education.degree}
              onChange={handleChange}
              required
            >
              <option value="Select">--- Select Degree --- </option>
              <option value="ged">GED</option>
              <option value="high school">Diploma</option>
              <option value="associate">Associate's</option>
              <option value="bachelor">Bachelor's</option>
              <option value="graduate">Master's</option>
              <option value="doctorate">Doctorate</option>
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} controlId="formEduField">
            <Form.Label>Subject</Form.Label>
            <Form.Control
              type="text"
              name="field"
              value={education.field}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formDateFrom">
            <Form.Label>From</Form.Label>
            <Form.Control
              type="date"
              name="dateFrom"
              value={education.dateFrom}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formDateTo">
            <Form.Label>To</Form.Label>
            <Form.Control
              type="date"
              name="dateTo"
              value={education.dateTo}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group
            as={Col}
            controlId="formGraduated"
            className="position-relative"
          >
            <Form.Check
              name="graduated"
              label="Graduated?"
              value={education.graduated}
              onChange={handleChange}
              className="position-absolute top-50"
            />
          </Form.Group>
        </Row>
      </Form>
    </Container>
  );
}

export default EduForm;
