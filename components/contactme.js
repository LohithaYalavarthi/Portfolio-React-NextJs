import React, { useEffect } from "react"
import Container from "@mui/material/Container"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Divider from "@mui/material/Divider"
import EmailView from "../components/emailview"
import EmailIcon from "@mui/icons-material/Email"

function ContactMe() {
  return (
    <>
      <Container sx={{ marginTop: "60px" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Divider sx={{ width: "50px", color: "black" }} />
          <Box sx={{ paddingLeft: "30px", fontSize: "10px" }}>CHECK OUT MY</Box>
        </Box>
        <Typography variant="h4" m={3}>
          {" "}
          CONTACT
        </Typography>
        <Paper
          elevation={3}
          sx={{
            padding: "23px",
            borderRadius: "45px",
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
          }}
        >
          <Typography variant="h5" m={3}>
            {" "}
            Get in Touch
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            <EmailView icon={<EmailIcon />} text="Rest Api" />
            <EmailView icon={<EmailIcon />} text="Rest Api" />
            <EmailView icon={<EmailIcon />} text="Rest Api" />
          </Box>
        </Paper>
      </Container>
    </>
  )
}

export default ContactMe
