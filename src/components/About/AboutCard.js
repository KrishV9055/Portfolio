import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey there, I am <span className="purple">Krishkumar Viramgama </span>
            from <span className="purple"> Gujarat, India.</span>
            <br />
            I am currently fresher and looking for the internship as well as full-time opportunity.
            <br />
            <br />
            I am pursuing B.Tech in Computer Engineering from <span className="purple">Pandit Deendayal Energy University, Gandhinagar.</span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Drawing sketches
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "No decision is right or wrong, you just need to make it RIGHT"{" "}
          </p>
          <footer className="blockquote-footer">A wise man</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
