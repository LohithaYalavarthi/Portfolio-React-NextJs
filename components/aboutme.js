import React, { useEffect } from "react"
import Container from "@mui/material/Container"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Divider from "@mui/material/Divider"

function AboutMe() {
  return (
    <div id="about">
      <Container
        sx={{
          display: "grid",
          placeContent: "center",
          rowGap: "20px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Divider sx={{ width: "50px", color: "black" }} />
          <Box sx={{ paddingLeft: "4px" }}>Some Info</Box>
        </Box>
        <Typography variant="h4"> About Me </Typography>
        <Paper
          elevation={3}
          sx={{ padding: "23px", borderRadius: "45px" }}
          className="paper-style"
        >
          <Typography variant="h6" gutterBottom className="text-style">
            Experienced Full Stack Developer with 6+ years of experience in the
            IT Industry.
          </Typography>

          <Typography variant="h6" gutterBottom className="text-style">
            Having a Master’s degree specializing in Computer Science.
          </Typography>

          <Typography variant="h6" gutterBottom className="text-style">
            Skilled in problem-solving, data structures, and algorithms.
          </Typography>
          <Typography variant="h6" gutterBottom className="text-style">
            Expertise in designing, developing, and implementing applications
            using a range of technologies.
          </Typography>
        </Paper>
      </Container>
    </div>
  )
}

export default AboutMe
