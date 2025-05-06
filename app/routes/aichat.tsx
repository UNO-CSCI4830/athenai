import type { Route } from "./+types/home";
import { OllamaChatPage } from "~/pages/aichat";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "AI CHAT" },
    { name: "what does this do", content: "Contains page test!" },
  ];
}

export default function Ollama() {
  return <OllamaChatPage />;
}
