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
              "Displaying list of shopping items, adding in a cart, processing payments, search items and displaying offers and coupons etc.",
              "Technologies involved are React, React Hooks, NodeJS, GraphQL, AWS, DynamoDB, Storybook, Redux toolkit, Tailwind css, HTML, SCSS.",
              "Worked end to end process i.e supported delivering app from dev to prod env.",
            ]}
          />
          <BoxView
            text="Peerz Mobile Application"
            subtext1="Apr. 2019 to Aug. 2020"
            points={[
              "It is a Mobile Learning App, where student and mentor can log in through the App and can be able to raise , reply to a question , add skills & subjects , create profile etc.",
              "Worked on React, Redux, NodeJS, React Native, Webpack, JavaScript, MongoDB, AWS, Storybook, Bootstrap, Html5, CSS3, Linux, and Git.",
              "Worked with AWS for releases and deployments in various environments etc.",
              "Worked with Express Apis, regarding matching a list of mentors with students and build the various functionalities on mobile (Android/Iphone) with React Native i.e raising and reply to a Questions based on subject etc.",
              "Worked on Agile Environment, engaged in planning discussions, participated in SNT and worked towards project delivery from DEV environment to till Production Process",
              "Adapted with new tools and Learned new technologies.",
            ]}
          />
          <BoxView
            text="Peerz Web Application"
            subtext1="Apr. 2019 to Aug. 2020"
            points={[
              "It is a Web Application handled by Admin ( Clients) to Rematch or Reassigns the Particular question for students and also utilized for monitoring the list of questions requested and responded etc",
              "Worked on React, Redux, Styled Components, Storybook, Tailwindcss, AWS, Express Js, MongoDB.",
              "Participated in sharing tech topics and coding events etc.",
              "Participated in Planning meetings, Performed various demos to Clients, Attended Scrum Calls to discuss status for user stories etc.",
            ]}
          />
          <BoxView
            text="CORPORATE BANKING WEB APP EQUITAS BANK, INDIA	"
            subtext1="Jan. 2018 to Apr. 2019"
            points={[
              "Developed web application can be used by business correspondents who can visit customers at their doorstep and serve financial transactions and do Banking Operations.",
              "Developed a MobileBanking Application designed for Customers to Perform Account Opening, Transfers, UPI, BillPayments, etc.",
              "Development work included building, implementing the UI/UX screens i.e (SignUp, Login, Dashboard , Payments etc) and creating APIS i.e fetching the user details from database etc.",
              "Development involved using React, Redux, Azure , TypeScript, NodeJS, Express,  Material UI, JavaScript, HTML, CSS3, SCSS, GIT and SQL.",
              "Participating in the coding competitions and share technology updates with in the development team.",
            ]}
          />
          <BoxView
            text="INDIA POST PAYMENTS BANK, INDIA	"
            subtext1="Jan. 2016 to Jan. 2018"
            points={[
              "Developed a web application which is used to make Transactions that are essential to corporate ﬁnancing, investing and growth .The application helps corporate to do Cash Deposit, Cash withdrawal, Fund Transfer and other operations.",
              "Worked on HTML, Javascript, Nodejs, React, React Native, PostgreSQL,  SQL, CSS.",
            ]}
          />
        </Paper>
      </Container>
    </div>
  )
}

export default Project
