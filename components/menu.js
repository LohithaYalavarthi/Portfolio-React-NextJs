import { Typography } from "@mui/material"
import React from "react"
import Box from "@mui/material/Box"

function Menu() {
  return (
    <div className="navbar">
      <Box m={2}>
        <Box sx={{ backgroundColor: "#773dc8" }}>
          <Typography variant="h1">LY</Typography>{" "}
        </Box>
        <Box sx={{ marginTop: "5em" }}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#exp">Experience</a>
          <a href="#project">Project</a>
        </Box>
      </Box>
    </div>
  )
}

export default Menu
