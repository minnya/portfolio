import type { Navigation } from "@toolpad/core";
import { ROUTES } from "../data/RouteData";
import type { RouteMeta } from "../models/RouteMeta";

export interface NavigationItem {
  title: string;
  icon?: React.ReactNode;
  segment?: string;
  children?: NavigationItem[];
}

export type NavigationModel = NavigationItem[];

function extractNavigation(routes: RouteMeta[]): NavigationModel {
  const nav: NavigationModel = [];

  for (const r of routes) {
    if (r.nav) {
      const item: NavigationItem = {
        title: r.nav.title,
        icon: r.nav.icon,
        segment: r.nav.segment ?? r.path,
      };

      // 子ルートがある場合、再帰的に children として設定

      if (r.children) {
        const childNav = extractNavigation(r.children);
        if (childNav.length > 0) {
          item.children = childNav;
        }
      }

      nav.push(item);
    } else if (r.children) {
      // navがなくても子に nav があれば追加
      nav.push(...extractNavigation(r.children));
    }
  }

  return nav;
}

export const NAVIGATION: Navigation = [
  {
    title: "Home",
    segment: "",
    children: extractNavigation(ROUTES),
  },
];
