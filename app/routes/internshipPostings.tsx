import type { Route } from "./+types/home";
import { InternshipPostingsPage } from "~/pages/InternshipPostingsPage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Internship Postings" },
    { name: "what does this do", content: "Contains page test!" },
  ];
}

export default function InternshipPostings() {
  return <InternshipPostingsPage />;
}
