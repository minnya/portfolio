export interface RouteMeta {
  path?: string;
  element?: React.ReactNode;
  index?: boolean;

  children?: RouteMeta[];

  nav?: {
    title: string;
    icon?: React.ReactNode;
    segment?: string;
  };
}
