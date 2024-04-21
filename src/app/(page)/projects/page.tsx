import ProjectCard from "@/components/ProjectCards/ProjectCard";
import projectsJSON from "@/assets/json/projects";
import { Metadata } from "next";

const page = async () => {
  return (
    <div>
      <div className="grid gap-4 justify-center justify-items-center grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mx-auto">
        {projectsJSON?.map((project, i) => {
          return <ProjectCard key={project._id} {...project} i={i} />;
        })}
      </div>
    </div>
  );
};
export default page;

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Projects | jrTilak",
    description: "Click here to see all the projects on which I have worked.",
    openGraph: {
      title: "Projects | jrTilak",
      description: "Click here to see all the projects on which I have worked.",
    },
  };
};
