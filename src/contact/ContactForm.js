import { useState } from "react";
import { Form, Row, Col, Container, Button } from "react-bootstrap";
import emailjs from '@emailjs/browser';
import{ init } from '@emailjs/browser';
init('REACT_APP_EMAILJS_USER_ID');


const ContactForm = () => {
  
  const [ formData, setFormData ] = useState({email: '', firstName: '', lastName: '', subject: '', message: ''});
  console.log(formData)
  const handleChange = (e) => setFormData({...formData, [e.target.id]: e.target.value}) 
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, formData, process.env.REACT_APP_EMAILJS_USER_ID)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  
  return (
    <Container>
      <Form>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control 
                type="text" 
                placeholder=""
                value={formData.firstName}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control 
                type="text" 
                placeholder=""
                onChange={handleChange}
                value={formData.lastName}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Enter Email Address</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="name@example.com" 
              onChange={handleChange}
              value={formData.email}
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group className="mb-3" controlId="subject">
            <Form.Label>Subject</Form.Label>
            <Form.Control 
              type="text" 
              placeholder=""
              onChange={handleChange}
              value={formData.subject}
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group className="mb-3" controlId="message">
            <Form.Label>Message</Form.Label>
            <Form.Control 
              as="textarea" 
              placeholder="" 
              onChange={handleChange}
              value={formData.message}
            />
          </Form.Group>
        </Row>
        <Row>
          <Button 
            variant="yellow" 
            type="submit"
            onClick={e => sendEmail(e)}
          >
            Send
          </Button>
        </Row>
      </Form>
    </Container>
  )
}

export default ContactForm;