import type { Route } from "./+types/home";
import { UserDashboardPage } from "~/pages/UserDashboardPage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "User Dashboard" },
    { name: "what does this do", content: "Contains page test!" },
  ];
}

export default function UserDashboard() {
  return <UserDashboardPage />;
}
