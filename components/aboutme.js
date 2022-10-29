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
          <Box sx={{ paddingLeft: "4px", fontSize: "10px" }}>Some Info</Box>
        </Box>
        <Typography variant="h4"> About Me </Typography>
        <Paper
          elevation={3}
          sx={{ padding: "44px", borderRadius: "45px" }}
          className="paper-style"
        >
          <Typography variant="h6" gutterBottom>
            I&apos;m a fullstack developer with a background in computer
            science. My 5+ years of IT experience has given me a strong
            foundation in creating front-end and back-end applications and
            building complex solutions. Recently, I graduated Masters in
            computer Science from the Bishops University, I am passionate about
            coding and solving problems through code, and I am excited to work
            alongside other amazing programmers and learn so much more!
          </Typography>

          {/* <Typography variant="h6" gutterBottom>
            Skilled in problem-solving, data structures, and algorithms and
            Expertise in designing, developing, and implementing applications
            using a range of technologies.
          </Typography> */}
        </Paper>
      </Container>
    </div>
  )
}

export default AboutMe
