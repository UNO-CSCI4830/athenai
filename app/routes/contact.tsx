import type { Route } from "./+types/home";
import { ContactPage } from "~/pages/ContactPage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact Us" },
    { name: "what does this do", content: "Contains page test!" },
  ];
}

export default function Contact() {
  return <ContactPage />;
}
