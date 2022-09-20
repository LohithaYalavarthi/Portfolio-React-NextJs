import React from "react"
import Paper from "@mui/material/Paper"
import Box from "@mui/material/Box"
import Image from "next/image"
import { Typography } from "@mui/material"

function EmailView({ icon, text }) {
  return (
    <Box m={2}>
      <Paper
        elevation={3}
        sx={{
          width: "200px",
          height: "200px",
          padding: "3px",
          borderRadius: "20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            flexWrap: "wrap",
            padding: "74px",
          }}
        >
          {icon}
          <Typography variant="body2" p={1}>
            {text}
          </Typography>
        </Box>
      </Paper>
    </Box>
  )
}

export default EmailView
