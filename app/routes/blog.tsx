import type { Route } from "./+types/home";
import { BlogPage } from "~/pages/Blog.tsx";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Blog" },
    { name: "what does this do", content: "Contains page test!" },
  ];
}

export default function Blog() {
  return <BlogPage />;
}
