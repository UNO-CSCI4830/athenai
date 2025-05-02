import { EditProfilePage} from "~/pages/EditProfilePage";

//import EditProfilePage from "~/pages/EditProfilePage";

export function meta() {
  return [
    { title: "Edit Profile" },
    { name: "description", content: "Edit your personal profile info." },
  ];
}

export default function EditProfile() {
  return <EditProfilePage />;
}
