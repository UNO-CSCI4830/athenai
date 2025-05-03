import { TestPage } from "../pages/TestPage";

export function meta() {
  return [
    { title: "Test page" },
    { name: "what does this do", content: "Contains page test!" },
  ];
}

export default function Test() {
  return <TestPage />;
}
