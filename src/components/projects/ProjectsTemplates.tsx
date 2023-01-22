import { useState } from "react";

const ProjectsTemplate = ({ projectDetails }: any) => {
  const [slideArrow, setSlideArrow] = useState(false);
  return (
    <div className="font-manrope w-full max-w-[345px] min-h-[406px] mx-auto">
      <div className="project-image w-full h-[60%]">
        <img
          src={projectDetails.projectImage}
          alt={`A screenshot of the project ${projectDetails.projectName}`}
          className="w-full h-full object-cover rounded-xl hover:object-contain"
          loading="lazy"
        />
      </div>
      <div className="projects-details w-full h-[40%] flex flex-col space-y-3">
        <h2 className="text-standardSize font-[500] text-white pt-5">
          {projectDetails.projectName}
        </h2>
        <p className="text-standardGray text-[0.950rem]">
          {projectDetails.projectDescription}
        </p>
        <a
          href={projectDetails.projectLink}
          className="text-[0.850rem] text-white hover:text-standardGray transition-colors delay-75 ease-linear font-[500] flex items-center space-x-[0.06rem] w-fit"
          onMouseEnter={() => setSlideArrow(true)}
          onMouseLeave={() => setSlideArrow(false)}
          target="_blank"
        >
          github.com/iamnazeef/{projectDetails.endpoint}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`icon icon-tabler icon-tabler-arrow-up-right ${
              slideArrow ? "translate-x-[0.15rem]" : "translate-x-0"
            } transition-transform delay-75 ease-linear`}
            width="18"
            height="18"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <line x1="17" y1="7" x2="7" y2="17"></line>
            <polyline points="8 7 17 7 17 16"></polyline>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ProjectsTemplate;
