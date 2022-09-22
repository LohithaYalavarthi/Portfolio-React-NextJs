import React, { useEffect } from "react"
import Container from "@mui/material/Container"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Divider from "@mui/material/Divider"
import BoxView from "../components/boxview"
function Experience() {
  return (
    <div id="exp">
      <Container sx={{ marginTop: "100px" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Divider sx={{ width: "50px", color: "black" }} />
          <Box sx={{ paddingLeft: "30px" }}>CHECK OUT MY</Box>
        </Box>
        <Typography variant="h4" m={3}>
          {" "}
          Experience
        </Typography>
        <Paper
          elevation={3}
          sx={{ padding: "23px", borderRadius: "45px" }}
          className="paper-style"
        >
          <BoxView
            text="CGI INC"
            tech=""
            subtext="Application Support"
            points={[
              "Responsible for troubleshooting issues for various applications and provide the solutions.",
              "Using remote access, Service now, Active directory and Service desk toolKit and a lot of other apps for troubleshooting issues.",
              "Diagnose and resolve technical hardware and software issues.",
            ]}
          />
          <BoxView
            text="CloudThing India"
            tech="React, TypeScript , Node js, Docker, Azure"
            subtext="Senior Software Engineer"
            points={[
              "Working Experience with web technologies such as React/Redux, NodeJS,TypeScript, NextJS, JavaScript, React Native, MongoDB, SQL, CSS,Firebase, PHP, AWS, Jest",
              "Implemented UX using CSS and Material UI, Styled Components, AntDesign etc",
              "Implemented Routing functionalities using React-Router and Reach-router libraries",
              "Fixed Bugs in React Applications to improve UX/UI.",
              "Proficient in data structures, algorithm design, problem-solving, andcomplexity analysis",
              "Worked with Microsoft Azure, and AWS for deploying in variousenvironments and integrating databases",
            ]}
          />
          <BoxView
            text="I-Exceed Technologies Solutions Pvt. Ltd"
            subtext="Software Developer"
            tech="React, Nodejs, TypeScript, AWS, Docker"
            points={[
              "Worked mainly on Postman API’s, JavaScript, jQuery, React, Redux, TypeScript, Oracle SQL,PostgreSQL, Bootstrap, Html5, CSS3, ES6, Figma, Linux , Jest",
              "Experienced in creating backend APIs and communicating the requirements with clients, and Collaborated with designers to build design mockups to UI and delivered quality-driven applications.",
              "Developed and tested the code to work in all the browsers",
              "Worked with clients to understand and ensure the requirements were met.",
            ]}
          />
        </Paper>
      </Container>
    </div>
  )
}

export default Experience
