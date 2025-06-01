import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("badges", 'routes/badges.tsx')
] satisfies RouteConfig;
