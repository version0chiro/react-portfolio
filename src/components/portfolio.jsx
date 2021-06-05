import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard.jsx";

import bob from "../img/bob.png";


class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <Container>
          <h1 className="project-heading">
            My Recent <strong className="purple"> Work </strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few projects I've worked on recently.
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath="https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1366&q=80"
                isBlog={false}
                title="Find Me Issues"
                description="A React.js based web-app to find repositories containing 'good first issues' open source contribution. Any kind of contribution and suggestions are highly appreciated!"
                link="https://github.com/version0chiro/Find-Me-Issues"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath="https://hackster.imgix.net/uploads/attachments/1248069/_LLHnlmvYZH.blob?auto=compress%2Cformat&w=900&h=675&fit=min"
                isBlog={false}
                title="Buzz Beat"
                description="A portable monitoring system working on a cloud server and alerting with haptic feedback to the doctors for any sudden changes in the paitent's Health."
                link="https://www.hackster.io/385464/buzzbeat-8a9af9"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath="https://images.unsplash.com/photo-1618389041494-8fab89c3f22b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                isBlog={false}
                title="VS Meme"
                description="A VScode extension built on Typescript and Svelte, that works along with the Reddit API to extract memes and display them on the sidebar of the VSCode editior!"
                link="https://github.com/version0chiro/VS-Meme-Reddit"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath="https://images.unsplash.com/photo-1584483766114-2cea6facdf57?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                isBlog={false}
                title="Work-Safe"
                description="A wirless,IP-camera based SPO2, Heartrate and temperature monitoring sytem. The camera works on the frames obtained using image processing and extracts SPO2 and Heart rate value. Combined with an attendance system,authentication and server based data-based"
                link="https://www.youtube.com/watch?v=kgkzwwspV5Y"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={bob}
                isBlog={false}
                title="Bob The Builder"
                description="A construction focused Robot with features such as 'Crack and Water Leakage Detection using AI', 'Eulerian Maginfication for Vibration Analysis' , 'SPO2 Estimation using Image processing', 'A Chat bot to interact with people who needs help!'"
                link="https://evening-plains37092.herokuapp.com/"
              />
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default Portfolio;
