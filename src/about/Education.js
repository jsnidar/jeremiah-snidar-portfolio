import { Row, Col } from 'react-bootstrap';

const Education = () => {

  const education = [
    {
      degree: "Full Stack Software Engineering Bootcamp",
      concentration: "Javascript, React, Ruby and Ruby on Rails",
      school: "Flatiron School",
      graduated: "March 2022",
      location: "Austin, Texas"
    },
    {
      degree: "Master of Arts in Curriculum and Instruction",
      concentration: "Concentration in Urban Education",
      school: "University of Denver, Morgridge College of Education",
      graduated: "August 2013",
      gpa: 3.84,
      location: "Denver, Colorado"
    },
    {
      degree: "Bachelor of Arts in Behavioral Sciences",
      concentration: "Concentration in Urban Education",
      school: "Metropolitan State University of Denver",
      graduated: "June 2008",
      location: "Austin, Texas"
    }
  ]

  const renderEducation = education.map((school, index) => <Row key={index} className="pb-4">
    <Col sm={12} className="text-start fs-4">
      <span className="fw-bold">{school.degree}</span>
      <br></br>
      <span>{school.concentration}</span>
      <br></br>
      <span>{school.school}</span>
      {school.gpa ? <>
        <br></br>
        <span>GPA: {school.gpa}</span>
      </>: null }
    </Col>
    <Col className="text-end fs-4">
      <span>{school.graduated}</span>
      <br></br>
      <span>{school.location}</span>
    </Col>
  </Row>)

  return(
    <Row>
      <h2 className="text-start bp-4">Education</h2>
      {renderEducation}
    </Row>
  )
}

export default Education;