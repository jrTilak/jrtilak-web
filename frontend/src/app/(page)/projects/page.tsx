import ProjectCard from "@/components/ProjectCards/ProjectCard";
import { ProjectDocType } from "@/types/projects/project.types";
import projectsJSON from "@/assets/json/projects.json";
import { Metadata } from "next";

const page = async () => {
  const projects = await getProjectsCollection();
  return (
    <div>
      <div className="grid gap-4 justify-center justify-items-center grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mx-auto">
        {projects?.map((project) => {
          return <ProjectCard key={project._id} {...project} />;
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

const getProjectsCollection = async () => {
  const projects: ProjectDocType[] = projectsJSON.map((project) => ({
    ...project,
    icon: project.icon || "", // Set a default value for the icon property
  }));
  return projects.sort((a, b) => b.priority - a.priority);
};
