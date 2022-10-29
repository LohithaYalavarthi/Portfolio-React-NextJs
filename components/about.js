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
import GitHubIcon from "@mui/icons-material/GitHub"
import Link from "next/link"

function About() {
  return (
    <div id="home">
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          marginTop: "70px",
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} p={7}>
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
            <Grid item xs={7} className="margin-col">
              <Typography variant="subtitle1" p={2}>
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
              <Box
                pt={2}
                sx={{ display: "flex", alignItems: "center" }}
                className="grid-style"
              >
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
                  className="button-style"
                >
                  <a
                    href="/LohithaYalavarthi.pdf"
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

                    "& :hover": {
                      cursor: "pointer",
                    },
                  }}
                >
                  <Paper elevation={3} sx={{ padding: "5px" }}>
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
                  <Paper elevation={3} sx={{ padding: "5px" }}>
                    <Link href="https://github.com/LohithaYalavarthi">
                      <GitHubIcon sx={{ color: "#8444df" }} fontSize="large" />
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
