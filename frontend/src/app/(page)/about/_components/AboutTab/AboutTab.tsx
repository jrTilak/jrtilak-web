import RenderHtml from "@/components/Renderer/RenderHtml";
import { AboutTabProps } from "../../types";

export default function AboutTab({ aboutMd }: AboutTabProps) {
  return <RenderHtml html={aboutMd} />;
}
