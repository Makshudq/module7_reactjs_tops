import React from "react";
import Button from "@mui/material/Button";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import GitHubIcon from "@mui/icons-material/GitHub";
import GitHub from "@mui/icons-material/GitHub";

function Hero() {
  return (
    <>
      <div className="hero_container">
        <img src="MakshudingcroppedbgNone.png" alt="" />
        <h1>Hi, I'm Makshud Qureshi</h1>
        <h2>Reactjs Developer</h2>
        <p>
          I am a passionate Reactjs developer with over a year of experience in
          developing responsive web applications and mobile apps. I have
          hands-on experience with HTML, CSS, and JavaScript, as well as popular
          frameworks and libraries like Angular, React, Ionic, Bootstrap, and
          Tailwind CSS. Driven by a desire for continuous learning, I am always
          eager to acquire new skills that enhance my professional growth.
          <br />
          <br />
          Please feel free to reach out to me at makshudq@gmail.com or WhatsApp-
          +91 8866331871.
        </p>

        <div className="btn_div">
          <Button
            variant="contained"
            startIcon={<MailOutlineIcon />}
            color="warning"
          >
            Contact me
          </Button>
          <Button
            variant="contained"
            startIcon={<GitHub />}
            sx={{ backgroundColor: "#202233", border: "1px solid #4d4b56" }}
          >
            My projects
          </Button>
        </div>
      </div>
    </>
  );
}

export default Hero;
