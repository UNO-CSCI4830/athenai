import type { Route } from "./+types/home";
import { CourseModulesPage } from "~/pages/CourseModulesPage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Course Modules" },
    { name: "what does this do", content: "Contains page test!" },
  ];
}

export default function CourseModules() {
  return <CourseModulesPage />;
}
