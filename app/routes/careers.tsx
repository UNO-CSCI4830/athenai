import type { Route } from "./+types/home";
import { CareersPage } from "~/pages/Careers.tsx";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Careers" },
    { name: "what does this do", content: "Contains page test!" },
  ];
}

export default function Careers() {
  return <CareersPage />;
}
