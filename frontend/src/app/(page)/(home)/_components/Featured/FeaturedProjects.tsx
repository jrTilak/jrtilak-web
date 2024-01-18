import ProjectCard from "@/components/ProjectCards/ProjectCard";
import PROJECTS_JSON from "@/assets/json/projects";
const FeaturedProjects = () => {
  const featuredProjects = PROJECTS_JSON.filter(
    (project) => project.isFeatured
  );
  return (
    <div>
      <div className="flex justify-between items-center mb-4 sm:mb-8">
        <h1 className=" text-3xl font-semibold leading-none  xs:text-4xl sm:text-5xl xl:text-6xl underline underline-offset-4">
          Featured Projects
        </h1>
      </div>
      <div className="flex gap-4 overflow-x-auto">
        {featuredProjects.map((project, index: number) => {
          if (index < 3) {
            return <ProjectCard key={project._id} {...project} />;
          }
        })}
      </div>
    </div>
  );
};
export default FeaturedProjects;
