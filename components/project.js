import React, { useEffect } from "react"
import Container from "@mui/material/Container"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Divider from "@mui/material/Divider"
import BoxView from "../components/boxview"
function Project() {
  return (
    <div id="projects">
      <Container>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Divider sx={{ width: "50px", color: "black" }} />
          <Box sx={{ paddingLeft: "30px", fontSize: "10px" }}>CHECK OUT MY</Box>
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
            text="Shopping Application"
            subtext1="Aug. 2020 to Jan. 2021"
            points={[
              "Displaying a list of shopping items, adding to a cart, processing payments, searching items, and displaying offers and coupons, etc.",
              "Technologies involved are React/Redux, NodeJS, GraphQL, TypeScript, Tailwind CSS, Storybook, AWS, and DynamoDB.",
              "Worked end to end process i.e supported delivering app from dev to prod.",
            ]}
          />
          <BoxView
            text="Peerz Mobile Application"
            subtext1="Apr. 2019 to Aug. 2020"
            points={[
              "It is a Mobile Learning App where students and mentors register to the app to raise, reply to a question, add skills & subjects, create profiles etc.",
              "Developed app using React Native, Redux, ExpressJS, Webpack, JavaScript, MongoDB, Bootstrap, Html5, CSS3, Linux, and Git.",
              "Created Express APIs to match questions raised by students to mentors based on ratings.",
              "Generated apk, ipa files and published the app to the Google play store and Apple store.",
              "Quickly Adapted to new tools and technologies that are needed when developing applications.",
              "Worked in Agile Environment, engaged in planning discussions, participated in SNT and worked towards project delivery from DEV environment to till Production Process.",
            ]}
          />
          <BoxView
            text="Peerz Web Application"
            subtext1="Apr. 2019 to Aug. 2020"
            points={[
              "It is a Web Application handled by Admin ( Clients) to Rematch or Reassigns the Particular question for students and also utilized for monitoring the list of questions requested and responded etc.",
              "Worked with React, Redux, ExpressJS, Styled Components, CSS3, SCSS, Html5, Webpack, Mongodb, AWS.",
              "Created and maintained knowledge base to provoke knowledge base with in team.",
              "Presented various demos to clients, discussed designs with the UX team and mentored junior developers.",
            ]}
          />
          <BoxView
            text="CORPORATE BANKING WEB APP EQUITAS BANK, INDIA	"
            subtext1="Jan. 2018 to Apr. 2019"
            points={[
              "Developed a web application used by corporate to make transactions essential to corporate financing, investing and growth. The application helps corporate to do Cash Deposits, Cash withdrawals, Fund transfers and other operations.",
              "Development involved using JavaScript, HTML5, Azure Devops, Material UI, CSS3, GIT and SQL.",
              "Participated in the coding competitions and shared technology updates with in the development team.",
            ]}
          />
          <BoxView
            text="INDIA POST PAYMENTS BANK, INDIA	"
            subtext1="Jan. 2016 to Jan. 2018"
            points={[
              "Developed a web application that can help bank employees to serve the customers visiting branches, and also created a tablet and mobile app for bank users to perform many of the same activities as online banking.",
              "Worked on React Native, React, PostgreSQL, CSS3, SCSS.",
            ]}
          />
        </Paper>
      </Container>
    </div>
  )
}

export default Project
