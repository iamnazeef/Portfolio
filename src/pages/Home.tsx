import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import About from "../components/home/About";
import EndNote from "../components/home/EndNote";
import SocialHandles from "../components/home/SocialHandles";

const Home: React.FC = () => {
  return (
    <section className="home bg-black min-h-screen py-4 px-5 tablet:px-10 laptop:px-12 desktop:px-24">
      <header className="social-handles">
        <SocialHandles />
      </header>
      <section className="about mt-20">
        <About />
      </section>
      <nav className="projects-and-stack text-standardGray text-standardSize tablet:text-base mt-7 mb-3 font-manrope">
        <ul className="flex items-center space-x-4">
          <li>
            <NavLink
              to="projects"
              className="font-[500]"
              style={({ isActive }: { isActive: boolean }) => ({
                color: isActive ? "#EEEEE7" : "#a3a3a3",
              })}
            >
              <h3 className="hover:text-gray-200 transition-colors delay-75 ease-linear laptop:text-[1.05rem]">
                Projects
              </h3>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="tech-stack"
              className="font-[500]"
              style={({ isActive }: { isActive: boolean }) => ({
                color: isActive ? "#EEEEE7" : "#a3a3a3",
              })}
            >
              <h3 className="hover:text-gray-200 transition-colors delay-75 ease-linear laptop:text-[1.05rem]">
                Tech stack
              </h3>
            </NavLink>
          </li>
        </ul>
      </nav>
      <hr className="w-full mx-auto border-0 h-[0.1px] bg-darkGray rounded-sm" />
      <main className="nested-routes-data-display my-8">
        <Outlet />
      </main>
      <hr className="w-full mx-auto border-0 h-[0.1px] bg-darkGray rounded-sm" />
      <EndNote />
      <hr className="w-full mx-auto border-0 h-[0.1px] bg-darkGray rounded-sm" />
      <footer className="footer text-sm my-5 text-standardGray flex items-center justify-between">
        <p>Nazeef &copy; {new Date().getFullYear().toString()}</p>
        <p>🚀</p>
      </footer>
    </section>
  );
};

export default Home;
