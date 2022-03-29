import { Row } from "react-bootstrap";
import ProjectCard from "./ProjectCard";

const ProjectsContainer = () => {

  const projects = [
    { 
      repoUrl: "https://github.com/jsnidar/kidblossom-guitar-school",
      thumbnail: "/school.JPG",
      title: "KidBlossom Guitar School",
      description: "Guitar school website with client, instructor and administrator roles where users can perform actions based on their role, including register for classes, create classes, add other users and assign students to classes.",
      videoUrl: "https://watch.screencastify.com/v/drw80fB9QLwOOCbUusVY"
    }, {
      repoUrl: "https://github.com/jsnidar/lovely-weightloss-tracker",
      thumbnail: "/lovely.png",
      title: "Lovely Weight Loss Tracker",
      description: "Weight loss tracking application for clients of Lovely Nutrition where users set goals and track their progress by entering weight and other measurements in check-ins.",
      videoUrl: "https://drive.google.com/file/d/1a-RAz4LN6n-8bAy-FliZ-9KiojVzunoN/view?usp=sharing"
    }, {
      repoUrl: "https://github.com/jsnidar/lovely-meal-tracker",
      thumbnail: "/lovely.png",
      title: "Lovely Meal Tracker",
      description: "Daily meal tracking application for clients of Lovely Nutrition where users set goals for macronutrients using the diabetic exchange list, enter their daily meals and track their progress in meeting daily goals.",
      videoUrl: "https://drive.google.com/file/d/1PHUPvrqz92z930aM56nNdqW0JHRkiWK5/view?usp=sharing"
    }
  ]

  const renderProjects = projects.map((project, index) => <ProjectCard key={index} project={project}/>)

  return (
    <Row className="pb-4 fs-4 text-start">
      <h2>Portfolio</h2>
      {renderProjects}
    </Row>
  )

}

export default ProjectsContainer;