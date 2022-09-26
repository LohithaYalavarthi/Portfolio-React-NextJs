import Head from "next/head"
import Image from "next/image"
// import styles from "../styles/Home.module.css"
import About from "../components/about"
import Skills from "../components/skills"
import Menu from "../components/menu"
import AboutMe from "../components/aboutme"
import Experience from "../components/experience"
import Project from "../components/project"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import ContactMe from "../components/contactme"
import Container from "@mui/material/Container"
const outerTheme = createTheme({
  typography: {
    fontFamily: ["Poppins", "cursive"].join(","),
  },
})

export default function Home() {
  return (
    <ThemeProvider theme={outerTheme}>
      <div className="container">
        <div className="col-menu">
          <Menu />
        </div>
        <Container
          sx={{ display: "grid", rowGap: "10rem" }}
          className="margin-col"
        >
          <About />
          <AboutMe />
          <Skills />
          <Experience />
          <Project />
          {/* <ContactMe /> */}
        </Container>
      </div>
    </ThemeProvider>
  )
}
