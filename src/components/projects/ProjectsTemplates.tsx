import { useState } from "react";
import ProjectTypes from "../ProjectTypes";
import SlideArrow from "./icons/SlideArrow";

interface Props {
  projectDetails: ProjectTypes;
}

const ProjectsTemplate: React.FC<Props> = ({ projectDetails }) => {
  const [slideArrow, setSlideArrow] = useState<boolean>(false);
  return (
    <section className="font-manrope w-full max-w-[345px] min-h-[406px] mx-auto">
      <section className="project-image w-full h-[60%] rounded-xl">
        <img
          src={projectDetails.projectImage}
          alt={`A screenshot of the project ${projectDetails.projectName}`}
          className="w-full h-full object-cover rounded-xl hover:object-contain"
        />
      </section>
      <section className="projects-details w-full h-[40%] flex flex-col space-y-3">
        <h4 className="text-standardSize tablet:text-[0.995rem] laptop:text-[1rem] font-[500] text-white pt-5">
          {projectDetails.projectName}
        </h4>
        <p className="text-standardGray text-[0.950rem] tablet:text-[0.960rem] laptop:text-[0.970rem]">
          {projectDetails.projectDescription}
        </p>
        <a
          href={projectDetails.projectLink}
          className="text-[0.850rem] tablet:text-[0.860rem] laptop:text-[0.870rem] text-white hover:text-standardGray transition-colors delay-75 ease-linear font-[500] flex items-center space-x-[0.06rem] w-fit"
          onMouseEnter={() => setSlideArrow(true)}
          onMouseLeave={() => setSlideArrow(false)}
          target="_blank"
        >
          github.com/iamnazeef/{projectDetails.endpoint}
          <SlideArrow slideArrow={slideArrow} />
        </a>
      </section>
    </section>
  );
};

export default ProjectsTemplate;
