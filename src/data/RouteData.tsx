import { Navigate } from "react-router";
import type { RouteMeta } from "../models/RouteMeta";
import { ProfilePage } from "../pages/ProfilePage";
import { ShowcasePage } from "../pages/ShowcasePage";
import { ShowcaseDetailPage } from "../pages/ShowcaseDetailPage";
import { BlogPage } from "../pages/BlogPage";

export const ROUTES: RouteMeta[] = [
  {
    index: true,
    element: <Navigate to="about" replace />,
  },
  {
    path: "about",
    element: <ProfilePage />,
    nav: {
      title: "About",
      segment: "about",
    },
  },
  {
    path: "showcase",
    element: <ShowcasePage />,
    nav: {
      title: "Showcase",
      segment: "showcase",
    },
  },
  {
    path: "showcase/:id",
    element: <ShowcaseDetailPage />,
  },
  {
    path: "blog",
    element: <BlogPage />,
    nav: {
      title: "Blog",
      segment: "blog",
    },
  },
];
