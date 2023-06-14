import Picture from "../assets/image.jpg";

const Home: React.FC = () => {
  return (
    <section className="home min-h-screen px-4 py-12 w-full max-w-[900px] mx-auto text-standardGray font-medium text-lg">
      <header className="flex items-center gap-2 tracking-wide">
        <img src={Picture} width={45} height={45} loading="lazy" />
        <div>
          <span className="font-bold text-gray-300 mr-1">Nazeef Muhammed,</span>
          developer
        </div>
      </header>
      <section className="mt-8 mb-8">
        <div className="w-full max-w-[750px] mb-4">
          <p className="font-bold text-2xl mb-4 text-gray-300">
            I'm, a CS grad who is passionate about software development.
          </p>
          <div className="flex flex-col gap-2">
            <p>
              I'm Nazeef, a CS grad and a software developer experienced in
              Javascript, Typescript, and frameworks such as React and Tailwind.
            </p>
            <p>
              Presently, I am actively engaged in expanding my knowledge and
              skills in server-side programming.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span>Want to reach out?</span>
          <a
            href="mailto:muhammednazeef6@gmail.com"
            className="flex items-center space-x-[0.06rem] font-bold tracking-[0.019em] text-blue-700 hover:text-blue-900 transition-colors delay-75 ease-linear w-fit"
          >
            <span>Say hello!</span>
          </a>
        </div>
      </section>
      <footer className="flex flex-col items-start gap-2 tablet:absolute tablet:bottom-12">
        <a
          href="https://github.com/iamnazeef"
          className="text-blue-900 hover:underline"
        >
          Github
        </a>
        <a
          href="https://twitter.com/iamnazeef_"
          className="text-blue-900 hover:underline"
        >
          Twitter
        </a>
        <a
          href="https://drive.google.com/file/d/1BZWAboal4VXHqesJDIIF42z4qJrpSxeG/view"
          className="text-blue-900 hover:underline"
        >
          Resume
        </a>
        <a
          href="https://www.linkedin.com/in/nazeef-muhammed/"
          className="text-blue-900 hover:underline"
        >
          Linkedin
        </a>
      </footer>
    </section>
  );
};

export default Home;
