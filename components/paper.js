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
          width: "82px",
          height: "82px",
          padding: "6px",
          borderRadius: "20px",
        }}
      >
        <Box
          sx={{
            display: "grid",
            placeItems: "center",
            rowGap: "4px",
          }}
        >
          <Image
            src={`/${icon}.svg`}
            alt="Picture of the author"
            width={40}
            height={40}
          />
          <Typography variant="body2">{text}</Typography>
        </Box>
      </Paper>
    </Box>
  )
}

export default PaperComponent
