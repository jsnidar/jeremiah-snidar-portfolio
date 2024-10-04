import { Row } from 'react-bootstrap';


const AboutMe = () => {

  const p1 = 'What motivates me most as a software engineer is that I love to work creatively to solve complex puzzles as a part of a team. ' + 
    'As a Software Engineer at Savvas Learning, I work on the SuccessMaker team providing Math and Literacy Interventions to students across the country. '
  const p2 = 'Prior to engineering, I was an elementary teacher and instructional coach for the 8 years. ' +
    'Each school year was like managing a new project with the goal of maximizing student learning. ' + 
    'I worked closely with specialists to meet my students\' needs and analyzed student data regularly to monitor their progress and ensure we were on track to meet our goals. ' + 
    'In addition, I returned to my classroom and adapted the curriculum to meet the needs of my students. ' + 
    'Each year my students, families and teammates changed making some aspects smoother and others more challenging. ' + 
    'I loved that process!'
  const p3 = 'It has been invaluable to have had that experience in my current role. ' + 
    'I\'m able to provide feedback in meetings with designers and product owners from the point of view of a former user. ' + 
    'Breaking down curricular units into a scope and sequence of lesson plans has helped me digest Epic requirements into stories. ' +
    'Most importantly, I\'ve been able to transfer the mentorship experience and other soft-skills I developed as a teacher into engineering.'
    
  return(
    <Row className="pb-4 fs-4 text-start">
      <h2>About Me</h2>
        <p>{ p1 }</p>
        <p>{ p2 }</p>
        <p>{ p3 }</p>
    </Row>
  )
}

export default AboutMe;