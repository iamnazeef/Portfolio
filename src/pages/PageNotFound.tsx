import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="page-not-found bg-black min-h-screen text-lg tablet:text-2xl text-standardGray p-3 tablet:px-6 laptop:px-12 desktop:px-22 flex flex-col items-center justify-center space-y-3 font-manrope">
      <div className="404 flex items-center justify-center space-x-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-link-off"
          width="21"
          height="21"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M10 14a3.5 3.5 0 0 0 4.47 .444m2.025 -1.94c.557 -.556 1.392 -1.39 2.505 -2.504a3.536 3.536 0 0 0 -5 -5l-.5 .5"></path>
          <path d="M9.548 9.544a3.5 3.5 0 0 0 -.548 .456l-4 4a3.536 3.536 0 0 0 5 5l.5 -.5"></path>
          <path d="M3 3l18 18"></path>
          <path d="M3 3l18 18"></path>
        </svg>
        <span>404</span>
        <p>Page not found</p>
      </div>
      <div className="go-back-home text-standardSize tablet:text-[0.985rem] font-[500] hover:text-white transition-colors delay-75 ease-linear flex items-center justify-center space-x-2">
        <Link to="/">Go back home</Link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-home-share"
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
          <path d="M9 21v-6a2 2 0 0 1 2 -2h2c.247 0 .484 .045 .702 .127"></path>
          <path d="M19 12h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h5"></path>
          <path d="M16 22l5 -5"></path>
          <path d="M21 21.5v-4.5h-4.5"></path>
        </svg>
      </div>
    </div>
  );
};

export default PageNotFound;
