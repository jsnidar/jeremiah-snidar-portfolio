import { useState } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import emailjs from '@emailjs/browser';
import{ init } from '@emailjs/browser';
init('REACT_APP_EMAILJS_USER_ID');


const ContactForm = ({setAlertContent, setShowAlert}) => {
  
  const [ formData, setFormData ] = useState({email: '', firstName: '', lastName: '', subject: '', message: ''});
  
  const handleChange = (e) => setFormData({...formData, [e.target.id]: e.target.value}) 
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, formData, process.env.REACT_APP_EMAILJS_USER_ID)
      .then((result) => {
          setFormData({email: '', firstName: '', lastName: '', subject: '', message: ''})
          setAlertContent({heading: "Thank you for contacting me.", message: "I will respond to your message as soon as I can."})
          setShowAlert(true)
      }, (error) => {
        setAlertContent({heading: "Something went wrong.", message: error.text})
        setShowAlert(true)
      });
  };

  return (
    <Container className="p-4 border border-dark rounded">
      <Form>
        <h3 className="pt-3 border-bottom">Contact Me</h3>
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
            className="w-25 ms-3"
            size='lg'
            variant="outline-dark" 
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