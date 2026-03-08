import type { Navigation } from "@toolpad/core";
import { ROUTES } from "../data/RouteData";
import type { RouteMeta } from "../models/RouteMeta";

export interface NavigationItem {
  title: string;
  icon?: React.ReactNode;
  segment?: string;
}

export type NavigationModel = NavigationItem[];

function extractNavigation(routes: RouteMeta[]): NavigationModel {
  const nav: NavigationModel = [];

  for (const r of routes) {
    if (r.nav) {
      nav.push({
        title: r.nav.title,
        icon: r.nav.icon,
        segment: r.nav.segment ?? r.path,
      });
    }

    if (r.children) {
      nav.push(...extractNavigation(r.children));
    }
  }

  return nav;
}

export const NAVIGATION: Navigation = [
  {
    kind: "header",
    title: "Main items",
  },
  ...extractNavigation(ROUTES),
];
