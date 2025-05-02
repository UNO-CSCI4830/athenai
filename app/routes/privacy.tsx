import type { Route } from "./+types/home";
import { PrivacyPage } from "~/pages/PrivacyPage.tsx";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Privacy" },
    { name: "what does this do", content: "Contains page test!" },
  ];
}

export default function Privacy() {
  return <PrivacyPage />;
}
