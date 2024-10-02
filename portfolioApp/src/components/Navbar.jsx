import React, { useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import { styled } from "@mui/material/styles";
import ReorderIcon from "@mui/icons-material/Reorder";
import Switch from "@mui/material/Switch";

function Navbar({ switchHandleChange }) {
  const [show, setshow] = useState(" ");
  const [flag, setflag] = useState(true);

  function showSidebar() {
    setshow(flag ? "show_Sidebar" : null);
    setflag(flag ? false : true);
  }

  return (
    <>
      <ReorderIcon
        sx={{ color: "#FFF" }}
        onClick={showSidebar}
        id="stack_icon"
      />
      <div className="coantiner_nav" id={show}>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Skills</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">About me</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <Switch
                onChange={switchHandleChange}
                inputProps={{ "aria-label": "controlled" }}
                color="warning"
              />
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
