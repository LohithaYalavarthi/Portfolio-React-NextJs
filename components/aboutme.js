import React, { useEffect } from "react"
import Container from "@mui/material/Container"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Divider from "@mui/material/Divider"

function AboutMe() {
  return (
    <div id="about">
      <Container>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Divider sx={{ width: "50px", color: "black" }} />
          <Box sx={{ paddingLeft: "30px" }}>Some Info</Box>
        </Box>
        <Typography variant="h4" m={5}>
          {" "}
          About Me{" "}
        </Typography>
        <Paper elevation={3} sx={{ padding: "23px", borderRadius: "45px" }}>
          <Typography variant="h6" gutterBottom>
            I recently graduated masters in Computer Science and currently
            located in Toronto Canada
          </Typography>

          <Typography variant="h6" gutterBottom>
            A progressive thinker with excellent communication skills possesses
            5+ years of rich experience as an IT professional.
          </Typography>

          <Typography variant="h6" gutterBottom>
            Skilled in problem-solving and algorithms. Sound academic
            background..
          </Typography>
        </Paper>
      </Container>
    </div>
  )
}

export default AboutMe
