import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shriyansh Lohia </span>
            from <span className="purple"> India.</span>
            <br /> I'm a Front-end Developer havint expertise in field like
            <b className="purple"> Javascript, React, and Redux </b>
            <br />
            Additionally, I was working with a Car Rental Start-up in Abu Dhabi,
            UAE for the role of UI/UX designer and Front-end Developer.
            <br />
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Coding
            </li>
            <li className="about-activity">
              <ImPointRight /> Designing
            </li>
            <li className="about-activity">
              <ImPointRight /> Anime
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
