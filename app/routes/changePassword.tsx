import type { Route } from "./+types/home";
import ChangePasswordPage from "../pages/ChangePasswordPage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Registration page" },
    { name: "what does this do", content: "Contains page test!" },
  ];
}

export default function ChangePassword() {
  return <ChangePasswordPage />;
}
