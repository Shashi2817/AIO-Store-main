import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import github from "./github.png"
import linkedin from "./linkedin.png"
import faisal from "./faisal.png"
import leetcode from "./code.png"
import MetaData from "../MetaData";

const About = () => {
  const visitPortfolio = () => {
    window.location = "https://celadon-wisp-33266b.netlify.app/";
  };
  return (
   
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Me</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src={faisal}
              alt="Founder"
            />
            <Typography>Shashi Kumar Ranjan</Typography>
            <Button onClick={visitPortfolio} color="primary">
              Visit My PortFolio
            </Button>
            {/* <span>
              This is a sample wesbite made by @meabhisingh. Only with the
              purpose to teach MERN Stack on the channel 6 Pack Programmer
            </span> */}
          </div>
          <div className="aboutSectionContainer2">
           <Typography component="h2">Social Networks</Typography>
            <a
              href="https://www.linkedin.com/in/shashi-kumar-ranjan-b31a51225/"
              target="blank"
            >
            <img className="img-link" src={linkedin} />
            </a>

            <a  href="https://github.com/Shashi2817?tab=repositories" target="blank">
              <img className="img-link" src={github} />
            </a>
            <a  href="https://leetcode.com/u/Shashi2817/" target="blank">
              <img className="img-link" src={leetcode} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
