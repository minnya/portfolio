import { createBrowserRouter, Navigate } from "react-router";
import App from "../App";
import { ShowcasePage } from "../pages/ShowcasePage";

const router = createBrowserRouter(
  [
    {
      element: <App />,
      children: [
        {
          index: true,
          element: <Navigate to="about" replace />,
        },
        {
          index: true,
          path: "about",
          element: <ShowcasePage />,
        },
        {
          path: "showcase",
          element: <ShowcasePage />,
        },
        {
          path: "blog",
          element: <ShowcasePage />,
        },
      ],
    },
  ],
  { basename: "/portfolio" },
);

export default router;
