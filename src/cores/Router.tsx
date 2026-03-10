import { createBrowserRouter } from "react-router";
import type { RouteMeta } from "../models/RouteMeta";
import type { RouteObject } from "react-router";
import { ROUTES } from "../data/RouteData";
import App from "../App";

function mapRoutes(routes: RouteMeta[]): RouteObject[] {
  return routes.map((r) => {
    if (r.index) {
      return { index: true, element: r.element };
    }
    return {
      path: r.path,
      element: r.element,
      children: r.children ? mapRoutes(r.children) : undefined,
    };
  });
}

const router = createBrowserRouter([
  {
    element: <App />,
    children: mapRoutes(ROUTES),
  },
]);

export default router;
