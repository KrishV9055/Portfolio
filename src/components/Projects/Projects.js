import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import algonexus from "../../Assets/Projects/algonexus.png";
import expense from "../../Assets/Projects/expense.png";
import culturallens from "../../Assets/Projects/culturallens.png"
import dishcovery from "../../Assets/Projects/dishcovery.png"
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={algonexus}
              isBlog={false}
              title="AlgoNexus"
              description="AlgoNexus offers a hands-on experience with key operating system algorithms, including Shortest Job First, Dining Philosopher’s Problem, LOOK & C-LOOK, and FIFO Page Replacement. Our 'Contact Developers' feature allows users to ask questions directly to our team, fostering interactive learning and deeper understanding."
              ghLink="https://github.com/KrishV9055/AlgoNexus"
              demoLink="https://oslab-e7a1e.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={expense}
              isBlog={false}
              title="ExpenseGraphica"
              description="Developed an intuitive expense tracker with data visualization features to help users better understand and manage their expenses. The tool includes expense categorization, monthly tracking, and visualization using Chart.js, with a transition from PHP-SQL to the MERN stack for enhanced performance and scalability."
              ghLink="https://github.com/KrishV9055/ExpenseGraphica_MERN"
              demoLink="https://phenomenal-haupia-861cb5.netlify.app/"
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={culturallens}
              isBlog={false}
              title="CulturalLens.AI"
              description="Developed an image recognition tool that allows users to upload photos of Indian monuments, with our DL model predicting the monument names with high accuracy. Key features include multilingual support for monument information, detailed location coordinates for exploration, and the ability to discover other monuments in the same city."
              ghLink="https://github.com/KrishV9055/CulturalLens.AI"
            // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dishcovery}
              isBlog={false}
              title="DishCovery"
              description="Developed a practice project using APIs to create a recipe search tool. This tool allows users to input a single food item to receive its recipe or enter up to three ingredients to find dishes and recipes that can be made from those ingredients."
              ghLink="https://github.com/KrishV9055/DishCovery"
              demoLink="https://dishcoverysite.netlify.app/"
            />
          </Col>
        </Row>


      </Container>
    </Container>
  );
}

export default Projects;
