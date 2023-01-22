import { useState } from "react";

const About = () => {
  const [slideArrow, setSlideArrow] = useState(false);

  return (
    <div className="about text-standardGray font-medium text-standardSize tablet:text-base font-manrope w-full max-w-[340px] flex flex-col space-y-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-atom hover:rotate-180 transition-transform delay-75 ease-linear text-blue-700"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M12 12v.01"></path>
        <path d="M19.071 4.929c-1.562 -1.562 -5.994 .337 -9.9 4.243c-3.905 3.905 -5.804 8.337 -4.242 9.9c1.562 1.561 5.994 -.338 9.9 -4.244c3.905 -3.905 5.804 -8.337 4.242 -9.9"></path>
        <path d="M4.929 4.929c-1.562 1.562 .337 5.994 4.243 9.9c3.905 3.905 8.337 5.804 9.9 4.242c1.561 -1.562 -.338 -5.994 -4.244 -9.9c-3.905 -3.905 -8.337 -5.804 -9.9 -4.242"></path>
      </svg>

      <p>
        I'm <span className="text-white font-[500] tracking-wider">Nazeef</span>
        , a frontend developer and an aspiring full-stack developer
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
  );
};

export default About;
