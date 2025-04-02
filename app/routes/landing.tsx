import type { Route } from "./+types/home";
import { LandingPage } from "~/pages/LandingPage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Landing Page" },
    { name: "what does this do", content: "Contains page test!" },
  ];
}

export default function Landing() {
  return <LandingPage />;
}
