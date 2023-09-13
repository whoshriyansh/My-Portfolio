import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import dashboard from "../../Assets/Projects/dashboard.png";
import ecommerce from "../../Assets/Projects/ecommerce.png";
import youtube from "../../Assets/Projects/youtube.png";
import editor from "../../Assets/Projects/editor.png";
import game from "../../Assets/Projects/game.png";
import flipping from "../../Assets/Projects/flipping.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dashboard}
              isBlog={false}
              title="Admin Dashboard"
              description="This is an Admin Dashboard Pannel that can be used for different purpose like to track the sales and to track the Business Progress, states, Team, People Information and Lists. It has Nivo configue with it and also used Material UI."
              ghLink="https://github.com/whoshriyansh/Admin-Dashboard"
              demoLink="https://drive.google.com/file/d/1kw17IbHRog4GMYxw7JboCEuqBHTXZy0-/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="E-Commerce Site"
              description="This is a Fully Functional E-Commerce Site as in parth of Front end with Animation to adding Item to cart and storing that in Local Storage. It has all the cool features like - Hero Section, Featured Product, Highlight Products, Normal Shoes Sale Component, and a Blog Carousal."
              ghLink="https://github.com/whoshriyansh/E_commerce_site"
              demoLink="https://e-commerce-site-alpha.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={youtube}
              isBlog={false}
              title="Youtube Clone"
              description="This is the clone of Youtube and It has some Great Fetaures like advance search with real time suggestions, Nested Comments which are better than of Youtube, and also live Chat option where you can send message live while watching the videos."
              ghLink="https://github.com/whoshriyansh/CooTube"
              demoLink="https://coo-tube.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Codepen Clone"
              description="This is a Simple codepen clone which is used to write raw HTML, CSS, AND JavaScript. It has codemirror configure with it which made this thing possible. It is a fully functional editor."
              ghLink="https://github.com/whoshriyansh/codepen_clone"
              demoLink="https://drive.google.com/file/d/1J9ceo4NgNmfiBdPNXBcyH2B6hIjF6ZR-/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={game}
              isBlog={false}
              title="Fighting Game"
              description="This is a game purely made with the help of JavaScript and it was the most challanging projects till now because I have used proper JS for the first time while making this Project. It is a Fighting game which has Controls like all the {up, down, right, left} keys for Blue Player and for Red Player it has {a,s,d,w}. HOPE YOU ENJOY THE FIGHT!"
              ghLink="https://github.com/whoshriyansh/Fighting-Game-JS"
              demoLink="https://katanazero.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flipping}
              isBlog={false}
              title="Flipping Card"
              description="This is a Simple Responsive netflix Clone made with the help of html and css just to show my Mark-up laguage Skills to you."
              ghLink="https://github.com/whoshriyansh/Flipping-Card"
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
