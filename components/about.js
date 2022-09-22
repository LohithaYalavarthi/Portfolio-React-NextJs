import React from "react"
import Image from "next/image"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import { styled } from "@mui/material/styles"
import Paper from "@mui/material/Paper"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import TwitterIcon from "@mui/icons-material/Twitter"
import GitHubIcon from "@mui/icons-material/GitHub"
import { useRouter } from "next/router"
import Link from "next/link"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}))
function About() {
  return (
    <div id="home">
      <Container
        sx={{ display: "flex", alignItems: "center", height: "100vh" }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} p={2}>
            <Grid item xs={5} p={4}>
              <Box
                style={{
                  borderRadius: "50%",
                  overflow: "hidden",
                  boxShadow: "12px 0 #d9c8f1, 24px 0 #e2d6f3, 36px 0 #ece6f5",
                }}
              >
                <Image
                  src="/me.jpg"
                  alt="Picture of the author"
                  width={500}
                  height={500}
                />
              </Box>
            </Grid>
            <Grid item xs={7} mt={5}>
              {/* <p variant="heading1" gutterBottom p={1}>
              HI THERE! I'M
            </p> */}
              <Typography variant="subtitle1" p={2}>
                {" "}
                HI THERE! I&apos;M
              </Typography>
              <Typography variant="h3" gutterBottom pl={2}>
                <Box
                  sx={{
                    display: "inline",
                    paddingRight: "10px",
                    color: "#8444df",
                  }}
                >
                  Lohitha
                </Box>
                Yalavarthi
              </Typography>
              <Typography variant="subtitle1" gutterBottom pl={2}>
                A{" "}
                <p
                  style={{
                    display: "inline",
                    paddingRight: "7px",
                    color: "#8444df",
                  }}
                >
                  Front-End and Back-End Developer
                </p>
                passionate about developing applications.
              </Typography>
              <Box p={2} sx={{ display: "flex", alignItems: "center" }}>
                <Button
                  sx={{
                    background: "#773dc8",
                    borderRadius: "40px",
                    width: "170px",
                    height: "50px",
                    marginRight: "100px",
                  }}
                  fontSize="small"
                  variant="contained"
                >
                  <a
                    href="/Resume_Lohitha.pdf"
                    alt="alt text"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Resume
                  </a>
                </Button>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    textAlign: "center",
                    // padding: "15px 35px",

                    "& > :not(style)": {
                      m: 1,
                      width: 45,
                      height: 45,
                      alignContent: "center",
                      justifyContent: "center",
                      alignItems: "center",
                    },
                  }}
                >
                  <Paper elevation={3}>
                    <Link
                      href="https://www.linkedin.com/in/lohithayalavarthi/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LinkedInIcon
                        sx={{ color: "#8444df" }}
                        fontSize="large"
                      />
                    </Link>
                  </Paper>
                  <Paper elevation={3}>
                    <Link href="https://github.com/LohithaYalavarthi">
                      <GitHubIcon sx={{ color: "#8444df" }} fontSize="large" />
                    </Link>
                  </Paper>
                  <Paper elevation={3}>
                    <Link href="https://twitter.com/yravindhra">
                      <TwitterIcon sx={{ color: "#8444df" }} fontSize="large" />
                    </Link>
                  </Paper>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  )
}

export default About
