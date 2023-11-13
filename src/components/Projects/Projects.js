import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import dashboard from "../../Assets/Projects/dashboard.png";
import ecommerce from "../../Assets/Projects/ecommerce.png";
import youtube from "../../Assets/Projects/youtube.png";
import editor from "../../Assets/Projects/editor.png";
import game from "../../Assets/Projects/game.png";
import todolist from "../../Assets/Projects/todolist.png";

import prompt from "../../Assets/Projects/prompt.png";
import portfolio from "../../Assets/Projects/portfolio.png";
import tictac from "../../Assets/Projects/tictac.png";

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
              imgPath={ecommerce}
              isBlog={false}
              title="E-Commerce Site"
              description="This is a fully functional e-commerce site with a dynamic front end, including animations for adding items to the cart and seamlessly storing them in local storage. The site boasts various attractive sections such as a Hero Section, Featured Products, Highlighted Products, a Normal Shoes Sale Component, and a Blog Carousel. Moreover, it features a robust payment gateway system integrated with Stripe for secure and efficient transactions."
              ghLink="https://github.com/whoshriyansh/E_commerce_site"
              demoLink="https://e-commerce-site-alpha.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dashboard}
              isBlog={false}
              title="Admin Dashboard"
              description="This is an Admin Dashboard Panel designed for versatile purposes such as tracking sales, monitoring business progress, managing states, teams, people information, and lists. It comes equipped with Nivo configuration and incorporates Material UI for an enhanced user experience."
              ghLink="https://github.com/whoshriyansh/Admin-Dashboard"
              demoLink="https://drive.google.com/file/d/1kw17IbHRog4GMYxw7JboCEuqBHTXZy0-/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={youtube}
              isBlog={false}
              title="Youtube Clone"
              description="This is a YouTube clone with impressive features including advanced search with real-time suggestions, nested comments that surpass those on YouTube, and a live chat option allowing viewers to send messages in real-time while watching videos."
              ghLink="https://github.com/whoshriyansh/CooTube"
              demoLink="https://coo-tube.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={prompt}
              isBlog={false}
              title="AI Prompt NextJS app"
              description="Promptopia, an AI-sharing app, uses Next.js to connect seamlessly to MongoDB, eliminating the need for a backend server. The project features straightforward route configuration, and authentication is handled efficiently with Next.js Auth, connecting to Google Cloud for enhanced security. Aimed at addressing the rising demand for prompt sharing in the AI era, Promptopia employs MongoDB for robust data storage. The application promises intrigue and user-friendliness."
              ghLink="https://github.com/whoshriyansh/Promptopia"
              demoLink="https://promptopia-seven-cyan.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Codepen Clone"
              description="
              This is a straightforward CodePen clone tailored for composing raw HTML, CSS, and JavaScript. With CodeMirror configuration, it not only provides a fully functional editor but also offers a seamless and intuitive coding experience."
              ghLink="https://github.com/whoshriyansh/codepen_clone"
              demoLink="https://drive.google.com/file/d/1J9ceo4NgNmfiBdPNXBcyH2B6hIjF6ZR-/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todolist}
              isBlog={false}
              title="To-Do List"
              description="Experience a classic with this HTML, CSS, and JavaScript-powered Tic Tac Toe game. This sleek project offers an intuitive interface for timeless gaming fun. Enjoy responsive design and smooth interactions in this reimagined digital version of the beloved game."
              ghLink="https://github.com/whoshriyansh/To_Do_List-React"
              demoLink="https://to-do-list-react-beryl.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tictac}
              isBlog={false}
              title="TIC-TAC-TOE Game"
              description="Experience a classic with this HTML, CSS, and JavaScript-powered Tic Tac Toe game. This sleek project offers an intuitive interface for timeless gaming fun. Enjoy responsive design and smooth interactions in this reimagined digital version of the beloved game."
              ghLink="https://github.com/whoshriyansh/Tit-Tac-Toe"
              demoLink="https://tit-tac-toe.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={game}
              isBlog={false}
              title="Fighting Game"
              description="This game is exclusively crafted using JavaScript and stands as my most challenging project to date, as I ventured into employing proper JS for the first time. It takes the form of a thrilling fighting game, with controls utilizing {up, down, right, left} keys for the Blue Player and {a, s, d, w} for the Red Player. Dive into the intense gameplay and experience the outcome of my dedication and newfound JavaScript skills!"
              ghLink="https://github.com/whoshriyansh/Fighting-Game-JS"
              demoLink="https://katanazero.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio"
              description="Introducing my React portfolio, a dynamically animated and fully responsive showcase. Built with Tailwind CSS, it encompasses various pages, including a homepage, project details, blogs, and a tech stack overview. Offering a concise yet comprehensive view of my skills and projects, this portfolio invites you to explore my professional journey seamlessly."
              ghLink="https://github.com/whoshriyansh/Fighting-Game-JS"
              demoLink="https://katanazero.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
