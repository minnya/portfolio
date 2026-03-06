import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { SocialIcon } from "react-social-icons";

const ICON_SIZE = 40;

export const Header: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 2,
        px: 4,
      }}
    >
      {/* ナビリンク */}

      <Button color="inherit">About me</Button>
      <Button color="inherit">Showcase</Button>
      <Button color="inherit">Blog</Button>
      <SocialIcon
        url="https://www.linkedin.com/in/hirokazumiyoshi/"
        style={{ height: ICON_SIZE, width: ICON_SIZE }}
      />
      <SocialIcon
        url="https://github.com/minnya"
        style={{ height: ICON_SIZE, width: ICON_SIZE }}
      />
    </Box>
  );
};
