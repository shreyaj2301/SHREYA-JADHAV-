import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shreya Jadhav </span>
            from <span className="purple"> Satara,Maharashtra.</span>
            <br />
       {/*   I am currently employed as a software developer at Juspay.*/}
            <br />
            I have completed Bachelor of Technology in Computer Science And Engineering from Arvind Gavali College Of Engineering,Satara.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Art & Craft
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(00 00 00)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Shreya Jadhav</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
