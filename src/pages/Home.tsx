import { NavLink, Outlet } from "react-router-dom";
import About from "../components/home/About";
import EndNote from "../components/home/EndNote";
import SocialHandles from "../components/home/SocialHandles";

const Home = () => {
  return (
    <div className="home bg-black min-h-screen p-4 tablet:px-8 laptop:px-12 desktop:px-24">
      <div className="social-handles">
        <SocialHandles />
      </div>
      <div className="about mt-20">
        <About />
      </div>
      <nav className="projects-and-stack text-standardGray tablet:text-base mt-7 mb-3 font-manrope text-standardSize flex items-center space-x-4">
        <NavLink
          to="projects"
          className="font-[500]"
          style={({ isActive }) => ({
            color: isActive ? "white" : "#a3a3a3",
          })}
        >
          <p className="hover:text-white transition-colors delay-75 ease-linear">
            Projects
          </p>
        </NavLink>
        <NavLink
          to="tech-stack"
          className="font-[500]"
          style={({ isActive }) => ({
            color: isActive ? "white" : "#a3a3a3",
          })}
        >
          <p className="hover:text-white transition-colors delay-75 ease-linear">
            Tech stack
          </p>
        </NavLink>
      </nav>
      <hr className="w-full mx-auto border-0 h-[0.1px] bg-darkGray rounded-sm" />
      <div className="nested-routes-data-display my-8">
        <Outlet />
      </div>
      <hr className="w-full mx-auto border-0 h-[0.1px] bg-darkGray rounded-sm" />
      <EndNote />
      <hr className="w-full mx-auto border-0 h-[0.1px] bg-darkGray rounded-sm" />
      <div className="footer text-sm my-5 text-standardGray flex items-center justify-between">
        <p>Nazeef &copy; {new Date().getFullYear().toString()}</p>
        <p>🚀</p>
      </div>
    </div>
  );
};

export default Home;
