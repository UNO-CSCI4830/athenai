import type { Route } from "./+types/home";
import { HelpPage } from "~/pages/Help.tsx";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Help Center" },
    { name: "what does this do", content: "Contains page test!" },
  ];
}

export default function Help() {
  return <HelpPage />;
}
