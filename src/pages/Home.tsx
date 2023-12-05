import Picture from "../assets/image.jpg";

const Home: React.FC = () => {
  return (
    <section className="home font-inter font-[400] min-h-screen px-4 py-12 w-full max-w-[900px] mx-auto text-standardGray text-xl">
      <header className="flex items-center gap-2 tracking-wide">
        <img src={Picture} width={45} height={45} loading="lazy" alt="A mirror selfie of mine" />
        <div className="font-bold text-gray-300 mr-1">
          Nazeef Muhammed, Developer
        </div>
      </header>
      <section className="mt-8 mb-8">
        <div className="flex items-center gap-2">
          <span>Want to reach out?</span>
          <a
            href="mailto:muhammednazeef6@gmail.com"
            className="tracking-[0.019em] text-blue-800 hover:text-blue-900 transition-colors delay-75 ease-linear w-fit"
          >
            <b>Say hello!</b>
          </a>
        </div>
      </section>
      <footer className="flex flex-col items-start gap-2 tablet:absolute tablet:bottom-12">
        <a
          href="https://github.com/iamnazeef"
          className="text-blue-800 hover:underline"
        >
          Github
        </a>
        <a
          href="https://twitter.com/iamnazeef_"
          className="text-blue-800 hover:underline"
        >
          Twitter / X
        </a>
        <a
          href="https://drive.google.com/file/d/1BZWAboal4VXHqesJDIIF42z4qJrpSxeG/view"
          className="text-blue-800 hover:underline"
        >
          Resume
        </a>
        <a
          href="https://www.linkedin.com/in/nazeef-muhammed/"
          className="text-blue-800 hover:underline"
        >
          Linkedin
        </a>
      </footer>
    </section>
  );
};

export default Home;
