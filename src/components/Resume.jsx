import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
// import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
// import axios from "axios";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  return (
    <Container id="resume" fluid className="resume-section">
      {/* <Particle /> */}
      <Container>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Software Development Lead"
              date="08/2019 - Present"
              content={[
                "DJSRobocon is the esteemed robotics team of DJSCE and an annual participant of ABU Robocon Competition.",
                "Obtained All India Rank-1 in the first round of the competition two years in a row.",
                "Able to integrate embedded systems with various domains such as Machine Learning, Image Processing and Android development.",
                "Interfaced Android phone with Object Detection Application to Semi- Autonomous Robot for its self-alignment with respect to the object.",
              ]}
            />
            <Resumecontent
              title="Software Developer"
              date="08/2020 - 03/2021"
              content={[
                "K-Nine Medical Systems provided the doctors community with unique and thoughtfully developed high quality surgical devices.",
                "Curated a contact-less screening device for measurement of SPO2,Heart-Rate, Temperature all in one device.",
                "Shifted the whole processing of authorization to cloud increasing the production rate by 33%.",
              ]}
            />
            <Resumecontent
              title="AWS/Node.js Intern"
              date="06/2020 - 07/2021"
              content={[
                "Able to integrated Elastic Search/SQL with AWS EC2 Server and Node.js/Express.",
                "Curated a contact-less screening device for measurement of SPO2,Heart-Rate, Temperature all in one device.",
                "Completed all the request tasks with optimized solutions within deadlines.",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Electronics and Telecommunication Engineering [Dwarkadas J. Sanghvi College of Engineering,Mumbai]"
              date="2018 - Present"
              content={[`CGPA: 8.6 (Till 6th Sem)`]}
            />
            <Resumecontent
              title="12TH BOARD [Thakur College of Science,Mumbai]"
              date="2016 - 2018"
              content={["Precentage: 91%"]}
            />
            <Resumecontent
              title="10TH BOARD [Ryan International School Kandivali, Mumbai] "
              date="2012 - 2016"
              content={["CGPA: 8.4"]}
            />
            <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                `Leetcode current stars 2.5`,
                `5 stars in problem solving at Hackerrank`,
                "Technical Papers: 'EYE-STICK' (03/2020),'Aqua-Bin' (03/2021)",
                "Number of hackathons took part in 5",
              ]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Team Lead at DWS Robocon"
              content={[
                "Built a working system compiled of AI based crack detection,thermal camera based leakage detection, Used video magnification for vibration warnings.",
                "Also adapted a spo2 calculating algorithm along with a helpful chat bot!",
                "Awarded ASIA's most inspiring Idea by DWS Robocon (DWS Global) and received global recognition.",
              ]}
            />
            <Resumecontent
              title="Team Lead at 'Expand your senses with Edge Impulse and Neosensory'"
              content={[
                "The project is aimed towards the doctors that want to get vital health related data from the patients without having to be in contact or in a range, made using Android, Node-MCU and Cloud-Computing. ",
                "Awarded the Audience Favorite at Expand your senses with Edge Impulse and Neosensory.",
              ]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
