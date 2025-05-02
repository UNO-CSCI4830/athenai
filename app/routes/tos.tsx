import type { Route } from "./+types/home";
import { TOSPage } from "~/pages/TOSPage.tsx";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "TOS" },
    { name: "what does this do", content: "Contains page test!" },
  ];
}

export default function TOS() {
  return <TOSPage />;
}
