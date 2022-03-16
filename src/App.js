import './App.css';
import { Container, Row, Col, Image } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import AboutMe from './about/AboutMe';
import Education from './about/Education';
import ProjectsContainer from './projects/ProjectsContainer';
import BlogsContainer from './blogs/BlogsContainer';
import NavBar from './navigation/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <Container>
        <Row className="pb-4">
          <Col lg={9} md={8} sm={7}>
            <h1 className="pt-4 mt-4 fs-1">Jeremiah Snidar</h1>
            <h2 className="pt-3">Full Stack Software Engineer</h2>
            <h3 className="pt-3">Javascript | React | Redux | Ruby | Rails</h3>
          </Col>
          <Col className="pt-4 pe-2" lg={3} md={4} sm={5}>
            <Image
            alt="headshot"
            src="/profile.JPG"
            roundedCircle={true}
            className="img-fluid text-center mt-4"
          />
          </Col>
        </Row>
        <Routes>
          <Route path='/' element={<AboutMe />} />
          <Route path='/portfolio' element={<ProjectsContainer />} />
          <Route path='/blog-posts' element={<BlogsContainer />} />
          <Route path='/education' element={<Education />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
