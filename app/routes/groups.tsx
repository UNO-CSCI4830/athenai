import type { Route } from "./+types/home";
import { GroupsPage } from "~/pages/GroupsPage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Groups Page" },
    { name: "what does this do", content: "Contains page test!" },
  ];
}

export default function Groups() {
  return <GroupsPage />;
}
