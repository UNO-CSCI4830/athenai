import type { Route } from "./+types/home";
import { AboutPage } from "~/pages/AboutPage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About" },
    { name: "what does this do", content: "Contains page test!" },
  ];
}

export default function About() {
  return <AboutPage />;
}
