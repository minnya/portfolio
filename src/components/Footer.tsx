import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        mt: 4,
        textAlign: "center",
        backgroundColor: "ButtonFace",
      }}
    >
      <Typography variant="body2" color="textSecondary">
        © {new Date().getFullYear()} Hirokazu Miyoshi
      </Typography>
    </Box>
  );
};
