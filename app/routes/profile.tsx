import type { Route } from "./+types/home";
import { ProfilePage } from "~/pages/ProfilePage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Profile" },
    { name: "what does this do", content: "Contains page test!" },
  ];
}

export default function Profile() {
  return <ProfilePage />;
}
