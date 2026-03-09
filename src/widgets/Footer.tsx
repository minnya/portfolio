// src/components/Footer.jsx
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material";

export const Footer: React.FC = () => {
  const theme = useTheme();
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        mt: 4,
        textAlign: "center",
        height: 50,
        borderTop: 1,
        borderColor: "divider",
      }}
    >
      <Typography variant="body2" color="textSecondary">
        © {new Date().getFullYear()} Hirokazu Miyoshi
      </Typography>
    </Box>
  );
};
