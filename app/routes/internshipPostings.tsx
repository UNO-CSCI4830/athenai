import InternshipPage from "~/pages/InternshipPage"; 

export function meta() {
  return [
    { title: "Internship Postings" },
    { name: "what does this do", content: "Contains page test!" },
  ];
}

export default function Internship() {
  return <InternshipPage />;
}