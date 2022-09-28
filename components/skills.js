import React, { useEffect } from "react"
import Container from "@mui/material/Container"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Divider from "@mui/material/Divider"
import PaperComponent from "../components/paper"

function Skills() {
  return (
    <div id="skills">
      <Container
        sx={{
          display: "grid",
          placeContent: "center",
        }}
      >
        <Box sx={{ display: "grid" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Divider sx={{ width: "50px", color: "black" }} />
            <Box sx={{ paddingLeft: "3px" }}>CHECK OUT MY</Box>
          </Box>
          <Typography variant="h4" m={3}>
            {" "}
            SKILLS
          </Typography>
        </Box>
        <Paper
          elevation={3}
          sx={{
            padding: "23px",
            borderRadius: "45px",
            display: "flex",
            flexWrap: "wrap",
          }}
          className="paper-style"
        >
          <PaperComponent icon="api" text="Rest Api" />
          <PaperComponent icon="react" text="React" />
          <PaperComponent icon="css" text="CSS" />
          <PaperComponent icon="sass" text="Sass" />
          <PaperComponent icon="jquery" text="jQuery" />
          <PaperComponent icon="html" text="HTML" />
          <PaperComponent icon="git" text="Git" />
          <PaperComponent icon="firebase" text="Firebase" />
          <PaperComponent icon="javascript" text="MongoDB" />
          <PaperComponent icon="javascript" text="AWS" />
          <PaperComponent icon="javascript" text="Redux" />
          <PaperComponent icon="javascript" text="TypeScript" />
          <PaperComponent icon="javascript" text="Nodejs" />
          <PaperComponent icon="javascript" text="JavaScript" />
          <Box sx={{ display: "flex", alignItems: "center" }}>
            .... many more
          </Box>
        </Paper>
      </Container>
    </div>
  )
}

export default Skills
