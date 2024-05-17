import { works } from "../data/works"
import Picture from "../assets/image.jpg";
import { socialHandles } from "../data/socialHandles";

const Home: React.FC = () => {

  return (
    <section className="home font-inter lowercase min-h-screen px-4 py-12 w-full max-w-[900px] mx-auto text-standardGray text-2xl">
      <header className="flex items-center gap-2 tracking-wide">
        {/* <img className="rounded-sm" src={Picture} width={45} height={45} loading="lazy" alt="profile picture" /> */}
        <div className="font-semibold text-white mr-1">
          iamnazeef
          <br />
          <span className="font-[400] font-inter text-xl text-standardGray">
            javascript engineer
          </span>
        </div>
      </header>
      <section className="mt-8 mb-8">
        <div className="flex items-center gap-2">
          <span>Want to reach out?</span>
          <a
            href="mailto:muhammednazeef6@gmail.com"
            className="font-semibold tracking-[0.019em] text-blue-800 hover:text-blue-900 transition-colors delay-75 ease-linear w-fit"
          >
            Say hello!
          </a>
        </div>
      </section>
      <section className="mt-8 mb-8">
        <span className="text-white font-semibold">Work</span>
        <div className="flex items-center gap-2 mt-2">
         <ul className="text-xl flex flex-col gap-3">
          {works.map(work => {
            return (
              <li>
                <span className="font-semibold">{work.position}</span>
                <br/>
                <span className="text-lg">{work.startYear} -&gt; {work.endYear} - <a href={work.organizationWebsite} target="_blank" className="border-b border-dashed hover:border-0">{work.organization}</a></span>
              </li>
            )
          })}
         </ul>
        </div>
      </section>
      <footer className="flex text-2xl flex-col items-start gap-2 absolute bottom-12">
       {socialHandles.map(socialHandle => {
        return (
          <a
          href={socialHandle.url}
          className="text-blue-800 hover:underline"
          target="_blank"
          >
            {socialHandle.name}
          </a>
        )
       })}
      </footer>
    </section>
  );
};

export default Home;
