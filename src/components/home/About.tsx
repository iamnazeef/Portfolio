import { useState } from "react";
import Atom from "./icons/Atom";
import SlideArrow from "./icons/SlideArrow";

const About: React.FC = () => {
  const [slideArrow, setSlideArrow] = useState<boolean>(false);

  return (
    <div className="about text-standardGray font-medium text-standardSize tablet:text-base laptop:text-[1.1rem] font-manrope w-full max-w-[340px] laptop:max-w-[355px] flex flex-col space-y-3">
      <Atom />
      <p>
        I'm{" "}
        <span className="text-gray-200 font-[500] tracking-wider">Nazeef</span>,
        a frontend developer and an aspiring full-stack developer
      </p>
      <p>
        I have a strong passion for creating visually appealing and
        user-friendly websites and web applications.
      </p>

      <a
        href="mailto:muhammednazeef6@gmail.com"
        className="flex items-center space-x-[0.06rem] font-[600] tracking-[0.019em] text-blue-700 hover:text-blue-900 transition-colors delay-75 ease-linear w-fit"
        onMouseEnter={() => setSlideArrow(true)}
        onMouseLeave={() => setSlideArrow(false)}
      >
        <p>Hire me</p>
        <SlideArrow slideArrow={slideArrow} />
      </a>
    </div>
  );
};

export default About;
