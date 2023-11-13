import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shriyansh Lohia . </span>
            <br /> I'm a Full Stack Developer who's all about making awesome
            things happen in the digital world. It all started with my
            fascination for coding and the thrill of never-ending learning. Now,
            I find myself in the exciting realm where development meets DevOps,
            working to make technology work smarter, not harder.
            <b className="purple"> </b>
          </p>
          <ul>
            <li className="about-activity purple">
              🖥️ I speak the language of the web, with skills in JavaScript,
              React, Node.js, and more.
            </li>
            <li className="about-activity purple">
              🌐 I believe in crafting high-performance, user-friendly digital
              solutions.
            </li>
            <li className="about-activity purple">
              📚 I'm a tech enthusiast, always exploring the latest trends and
              best practices.
            </li>
            <li className="about-activity purple">
              🎮 And when I'm not deep into coding, you'll often find me
              immersed in the captivating worlds of anime and manga.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Never Give-Up until you are forced to."{" "}
          </p>
          {/* <footer className="blockquote-footer"></footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
