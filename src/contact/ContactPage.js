import { useState } from "react";
import ContactForm from "./ContactForm";
import ContactAlert from './ContactAlert'
import { Container } from 'react-bootstrap'

const ContactPage = () => {

  const [ showAlert, setShowAlert ] = useState(false)
  const [ alertContent, setAlertContent ] = useState({heading: '', message: ''})

  return (
    <Container>
      {showAlert ? <ContactAlert
        alertContent={alertContent}  
        setShowAlert={setShowAlert}
      /> : <ContactForm
        setAlertContent={setAlertContent} 
        setShowAlert={setShowAlert}
      />}
    </Container>

  )
}

export default ContactPage;