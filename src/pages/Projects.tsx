import ProjectsTemplate from "../components/projects/ProjectsTemplates";
import { projects } from "../data/db.json";

const Projects = () => {
  return (
    <div className="projects w-full max-w-[1115px] mx-auto grid gap-12 grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3">
      {projects.map((data, index) => (
        <ProjectsTemplate projectDetails={data} key={index} />
      ))}
    </div>
  );
};

export default Projects;
