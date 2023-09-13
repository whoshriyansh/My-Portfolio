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
            from <span className="purple"> Dehradun, India.</span>
            <br /> I am a final year student pursuing an B.A in Journalism and
            Mass Communication from Graphic Era Hill University.
            <br />
            Additionally, I was working with a Car Rental Start-up in Abu Dhabi,
            UAE.
            <br />
            <br />I love to Code despite of no IT background I have honed my
            skills in this Field.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Coding
            </li>
            <li className="about-activity">
              <ImPointRight /> Art
            </li>
            <li className="about-activity">
              <ImPointRight /> Anime
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Never Give-Up until you are forced to."{" "}
          </p>
          <footer className="blockquote-footer">Shriyansh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
