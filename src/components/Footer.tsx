import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const Footer: React.FC = () => {
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
