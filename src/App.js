import './App.css';
import { Container, Row, Col, Image } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { Linkedin, Medium, Github, Envelope } from 'react-bootstrap-icons';
import Home from './Home'
import AboutMe from './about/AboutMe';
import Education from './about/Education';
import ProjectsContainer from './projects/ProjectsContainer';
import BlogsContainer from './blogs/BlogsContainer';
import NavBar from './navigation/NavBar';
import ContactPage from './contact/ContactPage';

function App() {

  let navigate = useNavigate()
  return (
    <>
      <NavBar />
      <Container>
        <Row className="pb-4">
          {/* <Col className="text-center" lg={9} md={8} sm={7}>
            <Image
              alt="headshot"
              src="/profileHeader.png"
              className="img-fluid pt-5 mt-4"
            />
          </Col> */}
          <Col lg={9} md={8} sm={7}>
            <h1 className="pt-4 mt-4 fs-1">Jeremiah Snidar</h1>
            <h2 className="pt-2 fw-normal">Full Stack Software Engineer</h2>
            <h3 className="pt-2 fw-light">Javascript | React | Redux | Ruby | Rails</h3>
            <h3 className="pt-2">
              <Linkedin
                onClick={()=> window.open('http://www.linkedin.com/in/jeremiah-snidar')}
                className="me-4" 
              />
              <Github
                onClick={()=> window.open('https://github.com/jsnidar')}
                className="me-4" 
              />
              <Medium
                onClick={()=> window.open('https://medium.com/@jsnidar')}
                className="me-4" 
              />
              <Envelope
                onClick={()=> navigate('/contact')}
              />
            </h3>
          </Col>
          <Col className="text-center pt-4 pe-2" lg={3} md={4} sm={5}>
            <Image
              alt="headshot"
              src="/profile.JPG"
              roundedCircle={true}
              className="img-fluid mt-4"
            />
          </Col>
        </Row>
        <Routes>
          <Route path='/' element={<AboutMe />} />
          <Route path='/about-me' element={<AboutMe />} />
          <Route path='/portfolio' element={<ProjectsContainer />} />
          <Route path='/blog-posts' element={<BlogsContainer />} />
          <Route path='/education' element={<Education />} />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
