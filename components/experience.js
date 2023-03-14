import React, { useEffect } from "react"
import Container from "@mui/material/Container"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Divider from "@mui/material/Divider"
import BoxView from "../components/boxview"
function Experience() {
  return (
    <div id="experience">
      <Container>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Divider sx={{ width: "50px", color: "black" }} />
          <Box sx={{ paddingLeft: "30px", fontSize: "10px" }}>CHECK OUT MY</Box>
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
            tech="Service now, Active directory, Service desk Tool Kit, SharePoint, Director, Citrix, Pulse secure, and RSA."
            subtext="IT Consultant"
            subtext1="July 2021 to Current - Sherbrooke, QC"
            points={[
              "Involved in developing various functionalities in different applications for our client BMO using reactjs,redux, styled components, nodejs",
              "Involved in analysis, design, development and testing phases of the application development (SDLC) usingAgile Scrum methodology",
              "Involved in design reviews and suggested changes in figma design",
              "Developed component based reusable modules using react js and used redux and context api for statemanagement",
              "Created unit test cases using jest and react testing library and used Git for version control.",
              "Responsible for resolving and troubleshooting application issues using technologies like ReactJS, NodeJS.",
              "Ensures that assigned tasks/tickets are delivered within required SLA and required quality objectives",
              "Responsible for creating Knowledge base and technical documentation whenever its required",
              "Responsible for monitoring and deploying applications in AWS cloud environment",
            ]}
          />
          <BoxView
            text="CloudThing India"
            tech="React/Redux, TypeScript, NodeJS, React Native, Jest, JavaScript, ES6+, HTML, HTML5, CSS, CSS3/SCSS, WebPack, MongoDB, GIT/GitHub, AWS, Linux, Rest API’s, Postman, JSON, XML, Docker."
            subtext="Senior Software Engineer"
            subtext1="Apr. 2019 to Jan. 2021 - India"
            points={[
              "Implemented responsive front-end UI/UX, back-end REST APIs, and Mobile applications.",
              "Communicated the requirements with clients, created stories, and collaborated with designers to build design mockups to UI and delivered quality-driven applications.",
              "Handled different projects, worked independently and in a team, and mentored junior developers.",
              "Experienced using version control GIT and GitHub and familiar with (CI/CD) pipelines, i.e. Docker, and cloud technologies like AWS, GCP, and Azure.",
              "Familiar with writing tests, including unit tests, integration tests, and e2e using Jest, and also supported shipping an application to a live production environment.",
            ]}
          />
          <BoxView
            text="I-Exceed Technologies Solutions Pvt. Ltd"
            subtext="Software Developer"
            subtext1="Jan. 2016 to Apr. 2019- India"
            tech="React/Redux, TypeScript, NodeJS, React Native, RTL, Jest, JavaScript, ES6+, HTML, CSS/ SCSS, WebPack, MongoDB, GIT/GitHub, AWS, Linux, Rest API’s, Postman, JSON, XML, Docker, Vercel."
            points={[
              "Built Web applications that can help bank employees to serve the customers visiting branches, and also created tablet and mobile apps for bank users to perform many of the same activities as online banking.",
              "Developed applications with the best software practices, security measures, coding reviews, source control management, good design skills, and testing.",
              "Involved in various phases of Software Development life cycle (SDLC) i.e. waterfall, and agile environment.",
            ]}
          />
        </Paper>
      </Container>
    </div>
  )
}

export default Experience
