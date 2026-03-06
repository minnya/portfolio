// src/components/Footer.jsx
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        mt: 4,
        textAlign: "center",
      }}
    >
      <Container>
        <Typography variant="body2" color="textSecondary">
          © 2026 Crushing C.O.D.E
        </Typography>
      </Container>
    </Box>
  );
};
