import type { Route } from "./+types/home";
import { ResumeBuilder } from "~/pages/ResumeBuilder";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resume" },
    { name: "what does this do", content: "Contains page test!" },
  ];
}

export default function Profile() {
  return <ResumeBuilder />;
}
