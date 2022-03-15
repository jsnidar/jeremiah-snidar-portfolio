import { Card, Button } from "react-bootstrap";

const ProjectCard = ({ project }) => {

  return (
    <Card className="bg-light m-3" style={{ width: '22rem' }}>
      <Card.Img variant="top" src={project.thumbnail} />
      <Card.Body>
        <Card.Title className="fs-4">{project.title}</Card.Title>
        <Card.Text className="fs-5">
          {project.description}
        </Card.Text>
        <div className="text-center">
          <Button onClick={() => window.open(`${project.repoUrl}`)} variant="success" className="me-4">Github Repo</Button>
          <Button onClick={() => window.open(`${project.videoUrl}`)} variant="success">Demo Video</Button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default ProjectCard;