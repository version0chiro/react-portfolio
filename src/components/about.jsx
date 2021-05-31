import React from "react";
import myImage from "../img/about1.png";
import myImage2 from "../img/about.png";
import { UserCard } from "react-ui-cards";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
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
        }
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
                      <h5 className="title-right">GitHub Stats</h5>
                      <UserCard
                        style={{
                          width: "100%",
                          height: "auto",
                          margin: "10px",
                          marginBottom:"20px"
                        }}
                        float
                        href="https://github.com/version0chiro"
                        header="https://i.imgur.com/w5tX1Pn.jpg"
                        avatar="https://avatars.githubusercontent.com/u/56084650?s=400&u=ad12c9cbe1a7d5eee24943a093d090391260daff&v=4"
                        name="Sachin Singh Bhadoriya"
                        positionName="Software Developer"
                        stats={[
                          {
                            name: "Commits",
                            value: 1484,
                          },
                          {
                            name: "Stars",
                            value: 12,
                          },
                          {
                            name: "Repositories",
                            value: 101,
                          },
                          {
                            name: "Total PRs",
                            value: 21,
                          },
                          {
                            name: "Contributed",
                            value: 25,
                          },
                        ]}
                      />

                      <p className="lead">
                      When I am not working, I am probably binge-watching animes or playing video games. I am a highly versatile music lover and have great taste, or that's what my peers have told me in movies. If you feel any of those can spark an interesting conversation between us, be sure to drop me a message and I will get back to you!.

                      </p>
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
