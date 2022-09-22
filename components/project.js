import React, { useEffect } from "react"
import Container from "@mui/material/Container"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Divider from "@mui/material/Divider"
import BoxView from "../components/boxview"
function Project() {
  return (
    <div id="project">
      <Container sx={{ marginTop: "100px", marginBottom: "20px" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Divider sx={{ width: "50px", color: "black" }} />
          <Box sx={{ paddingLeft: "30px" }}>CHECK OUT MY</Box>
        </Box>
        <Typography variant="h4" m={3}>
          {" "}
          Projects
        </Typography>
        <Paper
          elevation={3}
          sx={{ padding: "23px", borderRadius: "45px" }}
          className="paper-style"
        >
          <BoxView
            text="Peerz Mobile Application"
            points={[
              "It is a Mobile Learning App, where student and mentor can log in through the App and can be able to raise and reply to a question",
              "Worked on React, Redux, Styled Components, Ant Design, React-Native.",
              "Worked with Azure DEVOPS tools for releases and deployments in various environments etc",
              "Worked with GOOGLE CLOUD FIRESTORE and CLOUD Functions regarding matching a list of mentors with students and build the front end (UI/UX) with React Native on raising and reply to a Lessons Functionalities and Raising and Claiming a Questions etc",
              "Worked on Agile Environment, engaged in planning discussions, participated in SNT and worked towards project delivery from DEV environment to till Production Process",
              "Adapted with new tools and Learned new technologies",
            ]}
          />
          <BoxView
            text="Peerz Web Application"
            points={[
              "It is a Web Application handled by Admin ( Clients) to Rematch or Reassigns the Particular question for students and also utilized for monitoring the list of questions requested and responded etc",
              "Worked on React, Redux, Styled Components, Tailwindcss, React-Native, Express Js,  Firebase.",
              "Worked on webpack and with Azure DEVOPS tools for releases and deployments in various environments etc",
              "The various activities included in the App which requires interacting with clients, Involved in Planning meetings, Performed various demos to Clients, Attended Scrum Calls",
            ]}
          />
          <BoxView
            text="Consumer Banking Web Application Equitas Bank, India"
            points={[
              "It is a User-Friendly Web and Mobile Application designed for Users in more Moderate Way. Customers can Sign-Up and proceed to log in to their profiles and ability to do transfers within the bank or other banks at their doorstep",
              "Worked on HTML, Javascript, SQL, CSS",
              "Development work included building, implementing the UI/UX based on the design and achieving the banking functionalities",
              "The various activities included in the App which requires interacting with third-party vendors, Bank Clients in discussing the Application Functionalities, Involved in Planning meetings, Performed various demos to Clients, Attended Scrum Calls",
            ]}
          />
          <BoxView
            text="IDBI AOS Banking Application "
            points={[
              "IDBI Account Opening Application serves for Account Opening Purpose where Bank Users can open an Account for Customer",
              "	Handled & Designed & Implemented based on FSD and Delivering the Application with the best Quality driven & with best User Experience for Bank Users",
              "Development done in React Js,TypeScript, Redux, ES6, REST, Postman, API Calls to External Systems, MongoDB",
            ]}
          />
        </Paper>
      </Container>
    </div>
  )
}

export default Project
