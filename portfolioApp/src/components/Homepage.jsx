import React, { useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHub from "@mui/icons-material/GitHub";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

function Homepage() {
  const [bcg, setbcg] = useState("");
  const [flagbcg, setflagbcg] = useState(true);

  function switchHandleChange() {
    setbcg(flagbcg ? "whitebg" : null);

    setflagbcg(flagbcg ? false : true);
    console.log("object");
  }
  return (
    <>
      <div className="conatiainer_main" id={bcg}>
        <div className="vertical_left_div">
          <hr sx={{ color: "#fff" }} />
          <MailOutlineIcon color="warning" />
          <GitHub color="warning" />
        </div>

        <div className="center_container">
          <Navbar switchHandleChange={switchHandleChange} />
        </div>
        <Hero />
      </div>
    </>
  );
}

export default Homepage;
