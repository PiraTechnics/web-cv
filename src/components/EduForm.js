import { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import EduInfo from "./EduInfo";

function EduForm() {
  const [education, setEducation] = useState({
    level: "",
    school: "",
    degree: "",
    field: "",
    dateFrom: "",
    dateTo: "",
    graduated: true,
  });

  const [infoVisibility, setInfoVisibility] = useState(false);

  const graduatedRef = useRef(null);

  function handleChange(e) {
    setEducation({
      ...education,
      [e.target.name]:
        e.target.name === "graduated"
          ? graduatedRef.current.checked
          : e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setInfoVisibility(true);
  }

  function handleReset(e) {
    e.preventDefault();
    setInfoVisibility(false);
    setEducation({
      level: "",
      school: "",
      degree: "",
      field: "",
      dateFrom: "",
      dateTo: "",
      graduated: true,
    });
  }

  return (
    <>
      <Container className="inputGroup my-3">
        <h2 className="text-center">Education</h2>
        <hr className="solid my-1" />
        <Form onSubmit={handleSubmit} onReset={handleReset}>
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
                <option value="hs diploma">Diploma</option>
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
                defaultChecked={true}
                value={education.graduated}
                ref={graduatedRef}
                onChange={handleChange}
                className="position-absolute top-50"
              />
            </Form.Group>
          </Row>
          <div className="mb-2">
            <Button className="me-3" variant="outline-secondary" type="submit">
              Submit
            </Button>
            <Button className="me-3" variant="outline-secondary" type="reset">
              Reset
            </Button>
          </div>
        </Form>
      </Container>
      <EduInfo education={education} show={infoVisibility} />
    </>
  );
}

export default EduForm;
