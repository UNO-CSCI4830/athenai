import type { Route } from "./+types/home";
import { LoginPage } from "~/pages/LoginPage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Login Page" },
    { name: "what does this do", content: "Contains page test!" },
  ];
}

export default function Login() {
  return <LoginPage />;
}
