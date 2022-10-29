import { Typography } from "@mui/material"
import React from "react"
import Box from "@mui/material/Box"
import MenuItem from "@mui/material/MenuItem"
import ListItemText from "@mui/material/ListItemText"
import ListItemIcon from "@mui/material/ListItemIcon"
import MenuList from "@mui/material/MenuList"
import HomeIcon from "@mui/icons-material/Home"
import ArticleIcon from "@mui/icons-material/Article"
import PersonIcon from "@mui/icons-material/Person"
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter"
import MenuBookIcon from "@mui/icons-material/MenuBook"
import Link from "next/link"
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward"
function Menu() {
  const toggleSidebar = () => {
    document.getElementById("navbar").style.width = "180px"
    const elem = document
      .getElementById("navbar")
      .getElementsByClassName("text--hide")
    const scroll = document
      .getElementById("scrollDown")
      .getElementsByClassName("text--hide")
    console.log(scroll)
    scroll[0].style.display = "block"
    for (let i = 0; i < elem.length; i++) {
      elem[i].style.display = "block"
    }
  }
  const togglemouseOut = () => {
    document.getElementById("navbar").style.width = "80px"
    const elem = document
      .getElementById("navbar")
      .getElementsByClassName("text--hide")
    const scroll = document
      .getElementById("scrollDown")
      .getElementsByClassName("text--hide")
    scroll[0].style.display = "none"
    for (let i = 0; i < elem.length; i++) {
      elem[i].style.display = "none"
    }
  }
  return (
    <div
      className="navbar"
      id="navbar"
      onMouseOver={() => toggleSidebar()}
      onMouseOut={() => togglemouseOut()}
    >
      <Box m={2} id="navbar__item">
        <Typography sx={{ textAlign: "center" }} variant="h3">
          LY
        </Typography>{" "}
        {/* <Divider /> */}
        <MenuList sx={{ verticalAlign: "middle" }}>
          <Link href="#home">
            <MenuItem className="navbar__menu--item">
              <ListItemIcon>
                <HomeIcon sx={{ color: "white" }} fontSize="small" />
              </ListItemIcon>
              <ListItemText className="text--hide">Home</ListItemText>
            </MenuItem>
          </Link>
          <Link href="#about">
            <MenuItem className="navbar__menu--item">
              <ListItemIcon>
                <PersonIcon sx={{ color: "white" }} fontSize="small" />
              </ListItemIcon>
              <ListItemText className="text--hide">About</ListItemText>
            </MenuItem>
          </Link>
          <Link href="#skills">
            <MenuItem className="navbar__menu--item">
              <ListItemIcon>
                <ArticleIcon sx={{ color: "white" }} fontSize="small" />
              </ListItemIcon>
              <ListItemText className="text--hide">Skills</ListItemText>
            </MenuItem>
          </Link>
          <Link href="#experience">
            <MenuItem className="navbar__menu--item">
              <ListItemIcon>
                <BusinessCenterIcon sx={{ color: "white" }} fontSize="small" />
              </ListItemIcon>
              <ListItemText className="text--hide">Experience</ListItemText>
            </MenuItem>
          </Link>
          <Link href="#projects">
            <MenuItem className="navbar__menu--item">
              <ListItemIcon>
                <MenuBookIcon sx={{ color: "white" }} fontSize="small" />
              </ListItemIcon>
              <ListItemText className="text--hide">Projects</ListItemText>
            </MenuItem>
          </Link>
        </MenuList>
        <Box className="scrollDown" id="scrollDown">
          <MenuItem sx={{ cursor: "text" }}>
            <ListItemIcon>
              <ArrowDownwardIcon sx={{ color: "white" }} fontSize="large" />
            </ListItemIcon>
            <ListItemText className="text--hide">
              <span className="font--text">Scroll Down</span>
            </ListItemText>
          </MenuItem>
        </Box>
        {/* <Box sx={{ marginTop: "5em" }}>
          <Box sx={{ verticalAlign: "middle" }}>
            <HomeIcon text="Home" />
            <a href="#home">Home</a>
          </Box>

          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#exp">Experience</a>
          <a href="#project">Project</a>
        </Box> */}
      </Box>
    </div>
  )
}

export default Menu
