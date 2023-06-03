import React from "react";
import { Outlet } from "react-router-dom";
import About from "../components/home/About";
import EndNote from "../components/home/EndNote";
import SocialHandles from "../components/home/SocialHandles";
import Projects from "../components/projects/Projects";

const Home: React.FC = () => {
  return (
    <section className="home bg-black min-h-screen py-4 px-5 tablet:px-10 laptop:px-12 desktop:px-24">
      <header className="social-handles">
        <SocialHandles />
      </header>
      <section className="about mt-20">
        <About />
      </section>
      <div className="projects text-standardGray text-standardSize tablet:text-base mt-7 mb-3 font-manrope">
        <span className="laptop:text-[1.2rem] font-[500]">Projects</span>
        <hr className="w-full mx-auto border-0 h-[0.1px] bg-darkGray rounded-sm mt-2 mb-5" />
        <Projects />
      </div>
      <main className="nested-routes-data-display my-8">
        <Outlet />
      </main>
      <hr className="w-full mx-auto border-0 h-[0.1px] bg-darkGray rounded-sm mt-2 inline-block" />
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
