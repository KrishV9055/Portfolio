import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLeetcode,
  SiCodeforces,
  SiGeeksforgeeks,
} from "react-icons/si";
import aboutImg from "../../Assets/about_2.png"
function Toolstack() {
  return (
    <>
      <Row style={{ justifyContent: "center", padding: "10px" }}>
        <Col
          md={5}
          style={{ paddingBottom: "50px" }}
          className="about-img"
        >
          <img src={aboutImg} alt="about" className="img-fluid" />
        </Col>
        <Col style={{paddingTop:"4%"}}>
          <p style={{ float: "right", textAlign: "right", fontSize: "24px" }}>
            Apart from development, I like <span className="purple">DSA</span> also.
            <br />
            <br />
            I love to solve <span className="purple"> Data structures and Algorithm </span> questions and take participation in <span className="purple"> Competitive Programming Contests.</span>
          </p>
        </Col>

      </Row>
      <h1 className="project-heading">
        <strong className="purple">Platforms</strong> I use
      </h1>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <SiLeetcode />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiCodeforces />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiGeeksforgeeks />
        </Col>
      </Row>
    </>
  );
}

export default Toolstack;
