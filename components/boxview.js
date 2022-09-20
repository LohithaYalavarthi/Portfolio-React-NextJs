import React from "react"
import Paper from "@mui/material/Paper"
import Box from "@mui/material/Box"
import Image from "next/image"
import { Typography } from "@mui/material"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"

function BoxView({ text, tech, subtext, points = [] }) {
  return (
    <Box m={2} sx={{ marginBottom: "50px" }}>
      <Paper
        elevation={3}
        sx={{
          padding: "3px",
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
          <Typography variant="h5" p={1}>
            {text}
          </Typography>
          <Typography variant="subtitle1" pl={1} pr={1}>
            {subtext}
          </Typography>
          <Typography variant="h6" p={1}>
            {tech && (
              <>
                {" "}
                Technologies Used :{" "}
                <span style={{ color: "#8444df" }}> {tech} </span>{" "}
              </>
            )}
          </Typography>
          <List className="a">
            {points.map((point, i) => (
              <ListItem disablePadding>
                {" "}
                <Typography variant="h6" pl={2} pb={1}>
                  {i + 1} . {point}
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
