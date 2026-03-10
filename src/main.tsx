import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CssBaseline } from "@mui/material";
import { RouterProvider } from "react-router";
import router from "./cores/Router.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CssBaseline />
    <RouterProvider router={router} />
  </StrictMode>,
);
