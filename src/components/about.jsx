import React from "react";
import myImage from "../img/about1.png";
import myImage2 from "../img/about.png";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "HTML5_skill", content: "HTML5", porcentage: "80%", value: "80" },
        { id: "CSS3_skill", content: "CSS3", porcentage: "75%", value: "75" },
        {
          id: "JavaScript_skill",
          content: "JavaScript",
          porcentage: "90%",
          value: "90",
        },
        { id: "PHP_skill", content: "PHP", porcentage: "70%", value: "70" },
        {
          id: "ReactJS_skill",
          content: "ReactJS",
          porcentage: "80%",
          value: "80",
        },
        {
          id: "Python_skill",
          content: "Python",
          porcentage: "75%",
          value: "75",
        },
        {
          id: "VanillaJS_skill",
          content: "VanillaJS",
          porcentage: "85%",
          value: "85",
        },
        {
          id: "Wordpress_skill",
          content: "Wordpress",
          porcentage: "80%",
          value: "80",
        },
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "I am currently pursuing Electronics and Telecommunication engineering from DJSCE. I am a Software Developer, well versed in the realm of Full-Stack Web development. microelectronics and edge computation, Deep/Machine Learning, Image Processing, Android Development (Native and Cross-Platform), Database management and Version Control. I have been in several national and international hackathon and competitions hosted by various organizations and have achieved tons of remarkable feet regarding the scale of projects and recognition. I have been an active open-source contributor on GitHub and have various self-hosted open-sourced repositories for people to get their hands into various new fields.",
        },
        {
          id: "second-p-about",
          content:
            "I have high experience in Data Structures and Algorithms and have been practising them in highly competitive environments such as Hackerrank (5 stars in problem-solving) and Leetcode (2.5 stars in ranking <10000). I have two technical papers published in the IETE-SF journal. Apart from this, I have a habit of exploring new and upcoming technologies regularly making me up to pace with the current market. I am also available as a freelancer and have provided satisfaction to multiple clients.",
        },
        {
          id: "third-p-about",
          content:
            "When I am not working, I am probably binge-watching animes or playing video games. I am a highly versatile music lover and have great taste, or that's what my peers have told me in movies. If you feel any of those can spark an interesting conversation between us, be sure to drop me a message and I will get back to you!.",
        },
      ],
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      <img
                        src={myImage}
                        alt="About-us-img"
                        style={{ position: "relative", maxWidth: "100%" }}
                      />
                      <h5 className="title-right">Skills</h5>

                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map((skill) => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map((content) => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                    <img
                      src={myImage2}
                      alt="About-us-img"
                      style={{ position: "relative", maxWidth: "100%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
