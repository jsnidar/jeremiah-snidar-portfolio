import { Alert, Button } from "react-bootstrap"

const ContactAlert = ({alertContent, setShowAlert}) => {

  return (<Alert variant="light">
      <Alert.Heading>{alertContent.heading}</Alert.Heading>
      <p>
        {alertContent.message}
      </p>
      <hr />
      <div className="d-flex justify-content-end">
        <Button onClick={() => setShowAlert(false)} variant="light">
          Return to Contact Form
        </Button>
      </div>
    </Alert>)

}

export default ContactAlert;