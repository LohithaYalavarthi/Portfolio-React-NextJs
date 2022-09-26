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
      <Container>
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
            tech="Service now, Active directory and Service desk Tool Kit, SharePoint,Director, Citrix, Pulse secure, RSA."
            subtext="Application Support Analyst"
            subtext1="July 2021 to Current - Sherbrooke, QC"
            points={[
              "Diagnose and resolve technical hardware and software issues (printer, cell phone, web browser,etc).",
              "Responsible for handling numerous incoming calls, chats, and emails and providing L1/L2 support for clients with IT-related Issues or requests.",
              "Using remote access to perform diagnostics, and troubleshooting when needed.",
            ]}
          />
          <BoxView
            text="CloudThing India"
            tech="React/ Redux, TypeScript, NodeJS, React Native, RTL, Jest, JavaScript, ES6+, HTML, CSS/ SCSS, WebPack, MongoDB, GIT/GitHub, AWS, Linux, Rest API’s, Postman, JSON, XML, Docker, Vercel."
            subtext="Senior Software Engineer"
            subtext1="Apr. 2019 to Jan. 2021 - India"
            points={[
              "Experienced in building Responsive Web, and Mobile Applications and in creating REST APIs",
              "Communicated the requirements with clients, created stories, and collaborated with designers tobuild design mockups to UI and delivered quality-driven applications.",
              "Experience using version control GIT and GitHub and familiar with (CI/CD) pipelines i.e. Docker,and cloud technologies like AWS, Vercel, and Azure.",
              "Familiar with writing tests, including unit tests, integration tests, and e2e using RTL and Jest, andalso supported shipping an application to a live production environment.",
              "Worked in an agile environment, engaged in the scrum, contributed to planning discussions, met deadlines, and delivered the project.",
            ]}
          />
          <BoxView
            text="I-Exceed Technologies Solutions Pvt. Ltd"
            subtext="Software Developer"
            subtext1="Jan. 2016 to Apr. 2019- India"
            tech="React/ Redux, TypeScript, NodeJS, React Native, RTL, Jest, JavaScript,ES6+, HTML, CSS/ SCSS, WebPack, MongoDB, GIT/GitHub, AWS, Linux, Rest API’s, Postman, JSON,XML, Docker, Vercel."
            points={[
              "Handled, Designed & Implemented web and mobile banking applications and Delivered the Application with the best Quality driven & with the best User Experience for Bank Users.",
              "Experience using SVN and GIT and cloud technologies like Azure, and AWS.",
              "Experience using the command line tool and package managers i.e. NPM, yarn.",
              "Ability to work in fast pace environment.",
              "Involved in various phases of Software Development life cycle i.e. waterfall, and agile environment.",
            ]}
          />
        </Paper>
      </Container>
    </div>
  )
}

export default Experience
