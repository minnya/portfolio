import React from "react";
import Box from "@mui/material/Box";
import { SocialIcon } from "react-social-icons";
import { useLocation } from "react-router";
import { Link } from "@mui/material";
import { ROUTES } from "../data/RouteData";

const ICON_SIZE = 40;

export const Header: React.FC = () => {
  const location = useLocation();
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
      {ROUTES.filter((r) => r.nav).map((r) => (
        <Link
          key={r.nav!.segment}
          color={
            location.pathname.includes(r.nav!.segment!)
              ? "primary"
              : "textDisabled"
          }
          href={`#/${r.nav!.segment}`}
          underline="none"
        >
          {r.nav!.title}
        </Link>
      ))}
      <SocialIcon
        url="https://www.linkedin.com/in/hirokazumiyoshi/"
        style={{ height: ICON_SIZE, width: ICON_SIZE }}
        target="_blank"
      />
      <SocialIcon
        url="https://github.com/minnya"
        style={{ height: ICON_SIZE, width: ICON_SIZE }}
        target="_blank"
      />
    </Box>
  );
};
