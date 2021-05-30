import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiHtml5,
  DiJava,
  DiCss3,
  DiGit,
  DiSqllite,
} from "react-icons/di";
import {
  SiPytorch,
  SiTensorflow,
  SiAmazonaws,
  SiFlask,
  SiMysql,
  SiRaspberrypi,
  SiAndroid,
  SiArduino,
  SiNativescript,
  SiKeras,
  SiC,
  SiSvelte,
  SiTypescript,
} from "react-icons/si";

function Techstack() {
  return (
    <Container fluid className="about-section">
      <h1 className="project-heading">
        <strong className="color-a">Languages</strong>
      </h1>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <CgCPlusPlus />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiJavascript1 />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiTypescript />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiPython />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiJava />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiHtml5 />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiCss3 />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiC />
        </Col>
      </Row>
      <h1 className="project-heading">
        <strong className="color-a">Framework/Technologies</strong>
      </h1>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <SiTensorflow />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiReact />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiNodejs />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiPytorch />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiSvelte />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiAmazonaws />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiFlask />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiKeras />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiNativescript />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiAndroid />
        </Col>
      </Row>
      <h1 className="project-heading">
        <strong className="color-a">Databases</strong>
      </h1>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <DiMongodb />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiSqllite />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiMysql />
        </Col>
      </Row>
    </Container>
  );
}

export default Techstack;
