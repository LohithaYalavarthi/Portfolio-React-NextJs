import React from "react"
import Paper from "@mui/material/Paper"
import Box from "@mui/material/Box"
import Image from "next/image"
import { Typography } from "@mui/material"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"

function BoxView({ text, tech, subtext, subtext1, points = [] }) {
  return (
    <Box m={2} sx={{ marginBottom: "50px" }}>
      <Paper
        elevation={3}
        sx={{
          padding: "7px",
          borderRadius: "20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            // alignItems: "center",
            flexDirection: "column",
            flexWrap: "wrap",
          }}
        >
          <Typography variant="h6" p={1} className="text-style">
            {text}
          </Typography>
          <Typography variant="subtitle1" pl={1} pr={1} className="text-style">
            <b>{subtext}</b>
          </Typography>
          <Typography variant="subtitle1" pl={1} pr={1} className="text-style">
            {subtext1}
          </Typography>
          <Box p={1} className="text-style">
            {tech && (
              <>
                {" "}
                <Typography variant="body2">
                  <span style={{ color: "#8444df" }}>Technologies Used : </span>{" "}
                  {tech}{" "}
                </Typography>{" "}
              </>
            )}
          </Box>
          <List className="a">
            {points.map((point, i) => (
              <ListItem disablePadding key={i}>
                {" "}
                <Typography
                  variant="subtitle1"
                  pl={2}
                  pb={1}
                  className="text-style-1"
                >
                  <span style={{ fontSize: "6px", paddingRight: "10px" }}>
                    {"\u2B24"}
                  </span>{" "}
                  {point}
                </Typography>
              </ListItem>
            ))}
          </List>
        </Box>
      </Paper>
    </Box>
  )
}

export default BoxView
