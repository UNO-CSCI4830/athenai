import type { Route } from "./+types/home";
import { RegistrationPage } from "../pages/RegistrationPage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Registration page" },
    { name: "what does this do", content: "Contains page test!" },
  ];
}

export default function Registration() {
  return <RegistrationPage />;
}
