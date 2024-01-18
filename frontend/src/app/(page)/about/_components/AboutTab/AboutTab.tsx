import RenderMarkdown from "@/components/Renderer/RenderMarkdown";
import { AboutTabProps } from "../../types";

export default function AboutTab({ aboutMd }: AboutTabProps) {
  return <RenderMarkdown html={aboutMd} />;
}
