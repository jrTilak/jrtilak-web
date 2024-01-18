import RenderMarkdown from "@/components/Renderer/RenderMarkdown";

export default function AboutTab({ aboutMd }: { aboutMd: string }) {
  return <RenderMarkdown html={aboutMd} />;
}
