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
              "Implemented responsive front-end UI/UX, back-end REST APIs, and Mobile applications using ReactJS,NodeJS, NextJS, Contentful",
              "Discussed business requirements with clients, created stories and collaborated with designers to build UI mockups and deliver quality-driven applications.",
              "Handled different projects, worked independently and in a team, and mentored other developers",
              "Experienced working with AWS SAM framework for building serverless applications and created Lambda functions, API Gateways, Databases",
              "Experienced working with version control GIT, GitHub, NPM, yarn, debugging, and familiar with microservices, (CI/CD) pipelines i.e. Jenkins and cloud technologies like AWS, Docker, Kubernetes.",
            ]}
          />
          <BoxView
            text="I-Exceed Technologies Solutions Pvt. Ltd"
            subtext="Software Developer"
            subtext1="Jan. 2016 to Apr. 2019- India"
            tech="React/Redux, TypeScript, NodeJS, React Native, RTL, Jest, JavaScript, ES6+, HTML, CSS/ SCSS, WebPack, MongoDB, GIT/GitHub, AWS, Linux, Rest API’s, Postman, JSON, XML, Docker, Vercel."
            points={[
              "Built ReactJS/React Native app and web apps for banking clients (e.g., Equitas, India Post) to optimizein-branch experiences, enable efficient service, and enhance customer accessibility for on-the-go banking",
              "Responsible for creating and managing content using contentful and used set of JSON APIs to query thisdata in our React application.",
              "Experience working with relational databases ( PostgreSQL, MySQL , etc), NoSQL databases ( MongoDB,DynamoDB, etc), and object stores (S3, etc).",
              "Developed applications with SEO principles, the best software practices, and security measures, UX design, and provided coding reviews.",
              "Developed the application with zero issues and improved the app quality, which increased the number of users using the app from 30% to 90%.",
              "Involved in various phases of Software Development life cycle (SDLC) i.e. waterfall, agile software development practices such as SCRUM, KANBAN.",
            ]}
          />
        </Paper>
      </Container>
    </div>
  )
}

export default Experience
