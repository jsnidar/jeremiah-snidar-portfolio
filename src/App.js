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
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                onClick={()=> window.open('http://www.linkedin.com/in/jeremiah-snidar')}
                width="32" 
                height="32" 
                fill="currentColor" 
                className="bi bi-linkedin me-4" 
                viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
              </svg>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="32" 
                height="32" 
                fill="currentColor" 
                className="bi bi-github me-4" 
                viewBox="0 0 16 16"
                onClick={()=> window.open('https://github.com/jsnidar')}
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
              </svg>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="32"
                height="32"
                fill="currentColor"
                class="bi bi-medium" 
                viewBox="0 0 16 16"
                onClick={()=> window.open('https://medium.com/@jsnidar')}
              >
                <path d="M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8zm4.95 0c0 2.34-1.01 4.236-2.256 4.236-1.246 0-2.256-1.897-2.256-4.236 0-2.34 1.01-4.236 2.256-4.236 1.246 0 2.256 1.897 2.256 4.236zM16 8c0 2.096-.355 3.795-.794 3.795-.438 0-.793-1.7-.793-3.795 0-2.096.355-3.795.794-3.795.438 0 .793 1.699.793 3.795z"/>
              </svg>
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
          <Route path='/portfolio' element={<ProjectsContainer />} />
          <Route path='/blog-posts' element={<BlogsContainer />} />
          <Route path='/education' element={<Education />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
