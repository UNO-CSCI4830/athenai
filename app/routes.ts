import { type RouteConfig, index, route } from "@react-router/dev/routes";

//export default [index("routes/home.tsx")] satisfies RouteConfig;
//^ starting code, I'm not sure what index() does yet
export default [
    route("/", "routes/home.tsx"), 
    route("/test", "routes/test.tsx"),
    route("/module", "routes/courseModules.tsx"),
    route("/groups", "routes/groups.tsx"),
    route("/postings", "routes/internshipPostings.tsx"),
    route("/landing", "routes/landing.tsx"),
    route("/profile", "routes/profile.tsx"),
    route("/dashboard", "routes/userDashboard.tsx")
] satisfies RouteConfig;