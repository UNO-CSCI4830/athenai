import { type RouteConfig, index, route } from "@react-router/dev/routes";

//export default [index("routes/home.tsx")] satisfies RouteConfig;
//^ starting code, I'm not sure what index() does yet
export default [
    route("/", "routes/landing.tsx"), 
    route("/test", "routes/test.tsx"),
    route("/groups", "routes/groups.tsx"),
    route("/postings", "routes/internshipPostings.tsx"),
    route("/profile", "routes/profile.tsx"),
    route("/dashboard", "routes/userDashboard.tsx"),
    route("/modules", "routes/modules.tsx"),
    route("/aichat", "routes/aichat.tsx")
    route("/about", "routes/about.tsx"),
    route("/contact", "routes/contact.tsx"),
    route("/careers", "routes/careers.tsx"),
    route("/blog", "routes/blog.tsx"),
    route("/help", "routes/help.tsx"),
    route("/privacy", "routes/privacy.tsx"),
    route("/tos", "routes/tos.tsx"),
    route("/registrations", "routes/registrations.tsx"),
    route("/editProfile", "routes/editProfile.tsx"),
    route("/changePassword", "routes/changePassword.tsx"),
] satisfies RouteConfig;