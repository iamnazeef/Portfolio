import ProjectCard from "./ProjectCard";
import { projects } from "../../data/db.json";
import ProjectTypes from "../ProjectTypes";

const Projects: React.FC = () => {
  return (
    <section className="projects w-full max-w-[1115px] mx-auto grid gap-12 grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3">
      {projects.map((data: ProjectTypes, index: number) => (
        <ProjectCard projectDetails={data} key={index} />
      ))}
    </section>
  );
};

export default Projects;
