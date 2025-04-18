import type { Route } from "./+types/home";
import { ContactPage } from "~/pages/ContactPage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Course Modules" },
    { name: "what does this do", content: "Contains page test!" },
  ];
}

export default function Contact() {
  return <ContactPage />;
}
