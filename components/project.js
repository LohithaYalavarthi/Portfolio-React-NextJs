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
              "Worked on React-Native and Firebase and Azure",
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
              "Worked on React, Redux, Styled Components, Tailwindcss, Express Js,Firebase.",
              "Worked on webpack and with AWS for releases and deployments in various environments etc",
              "Finished all the development, before a deadline",
              "The various activities included sharing tech ideas with other developers. Participated in Planning meetings, Performed various demos to Clients, Attended Scrum Calls to discuss deadline",
            ]}
          />
          <BoxView
            text="Consumer Banking Web Application Equitas Bank, India"
            points={[
              "It is a User-Friendly Web and Mobile Application designed for Users in more Moderate Way. Customers can Sign-Up and proceed to log in to their profiles and ability to do transfers within the bank or other banks",
              "Worked on HTML, Javascript,Nodejs, React, React Native, PostgreSQL, MongoDB,  SQL, CSS",
              "Development work included building, implementing the UI/UX screens i.e (SignUp, Login, Dashboard , Payments etc) on the Figma design and achieving the banking functionalities",
              "Created APIS for sending back account balance ,transaction and payment details from database",
              "Participating in the coding competitions and share technology updates with in the development team",
            ]}
          />
          <BoxView
            text="Shopping Application "
            points={[
              "Displaying list of shopping items,adding in a cart,  processing payments, search items and displaying offers and coupons etc",
              "Technologies involved are React, AWS, GraphQL, DynamoDB",
              "Worked end to end process i.e delivering app from dev to prod env",
            ]}
          />
        </Paper>
      </Container>
    </div>
  )
}

export default Project
