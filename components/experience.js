import React, { useEffect } from "react"
import Container from "@mui/material/Container"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Divider from "@mui/material/Divider"
import BoxView from "../components/boxview"
function Experience() {
  return (
    <>
      <Container sx={{ marginTop: "100px" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Divider sx={{ width: "50px", color: "black" }} />
          <Box sx={{ paddingLeft: "30px" }}>CHECK OUT MY</Box>
        </Box>
        <Typography variant="h4" m={3}>
          {" "}
          Experience
        </Typography>
        <Paper elevation={3} sx={{ padding: "23px", borderRadius: "45px" }}>
          <BoxView
            text="CGI INC"
            tech="React, REST API, Chart Js"
            subtext="IT Service Technician"
            points={[
              "Responsible for troubleshooting issues for various applications and provide the solutions.",
              "Handling the large amount of calls and providing quality service inassisting clients for various issues",
              "Using remote access, Service now, Active directory and Service desk toolKit and a lot of other apps for troubleshooting issues.",
              "Diagnose and resolve technical hardware and software issues.",
            ]}
          />
          <BoxView
            text="CloudThing India"
            tech="React, REST API, Chart Js"
            subtext="Senior Software Engineer"
            points={[
              "Working Experience with web technologies such as React/Redux, NodeJS,TypeScript, NextJS, JavaScript, React Native, MongoDB, SQL, CSS,Firebase, PHP, AWS.",
              "Implemented UX using CSS and Material UI, Styled Components, AntDesign.",
              "Implemented Routing functionalities using React-Router",
              "Worked in Building front-end and back-end and Mobile apps.",
              "Fixed Bugs in React Applications to improve UX/UI.",
              "Proficient in data structures, algorithm design, problem-solving, andcomplexity analysis",
              "Worked with Microsoft Azure, and AWS for deploying in variousenvironments and integrating databases",
            ]}
          />
          <BoxView
            text="I-Exceed Technologies Solutions Pvt. Ltd"
            subtext="Software Developer"
            tech="React, REST API, Chart Js"
            points={[
              "Worked mainly on Postman API’s, JavaScript, jQuery, Oracle SQL,PostgreSQL, Bootstrap, Html5, CSS3, ES6, Figma, Linux.",
              "Implemented UI/UX designs as directed by designer",
              "Handled, Designed & Implemented web applications and Delivered theApplication with the best Quality driven & with the best User Experiencefor Bank Users.",
              "Developed and tested the code to work in all the browsers",
              "Worked closely with clients to understand and ensure the requirementswere met.",
            ]}
          />
        </Paper>
      </Container>
    </>
  )
}

export default Experience
