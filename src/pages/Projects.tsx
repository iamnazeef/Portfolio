import ProjectsTemplate from "../components/projects/ProjectsTemplates";
import { projects } from "../data/db.json";
import ProjectTypes from "../components/ProjectTypes";

const Projects: React.FC = () => {
  return (
    <div className="projects w-full max-w-[1115px] mx-auto grid gap-12 grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3">
      {projects.map((data: ProjectTypes, index: number) => (
        <ProjectsTemplate projectDetails={data} key={index} />
      ))}
    </div>
  );
};

export default Projects;
