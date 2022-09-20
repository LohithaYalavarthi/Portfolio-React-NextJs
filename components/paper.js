import React from "react"
import Paper from "@mui/material/Paper"
import Box from "@mui/material/Box"
import Image from "next/image"
import { Typography } from "@mui/material"

function PaperComponent({ icon, text }) {
  return (
    <Box m={2}>
      <Paper
        elevation={3}
        sx={{
          width: "80px",
          height: "80px",
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
          }}
        >
          <Image
            src={`/${icon}.svg`}
            alt="Picture of the author"
            width={40}
            height={40}
          />
          <Typography variant="body2" p={1}>
            {text}
          </Typography>
        </Box>
      </Paper>
    </Box>
  )
}

export default PaperComponent
