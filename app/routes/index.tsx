import { Home } from "~/pages/home/home";
import type { Route } from "./+types/index";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Peninnah Wangari" },
    { name: "description", content: "Thank you for reviewing my portfolio!" },
  ];
}

export default function Routes() {
  return <Home />;
}
