import './App.css';
import { Container, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutMe from './about/AboutMe';
import Education from './about/Education';
import ProjectsContainer from './projects/ProjectsContainer';


function App() {
  return (
    <Container>
      <Row className="pb-4">
        <h1 className="fs-1">Jeremiah Snidar</h1>
      </Row>
      <AboutMe />
      <Education />
      <ProjectsContainer />
      <Row>
        <h2>Blog Posts</h2>
      </Row>
    </Container>
  );
}

export default App;
