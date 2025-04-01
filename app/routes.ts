import { type RouteConfig, index, route } from "@react-router/dev/routes";

//export default [index("routes/home.tsx")] satisfies RouteConfig;
//^ starting code, I'm not sure what index() does yet
export default [
    route("/", "routes/home.tsx"), 
    route("/test", "routes/test.tsx"),
    route("/modules", "routes/modules.tsx")
] satisfies RouteConfig;