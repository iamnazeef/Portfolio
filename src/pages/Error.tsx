import { Link } from "react-router-dom";

const Error: React.FC = () => {
  return (
    <div className="page-not-found lowercase bg-black min-h-screen text-lg tablet:text-xl text-standardGray p-3 tablet:px-6 laptop:px-12 desktop:px-22 flex flex-col items-center justify-center space-y-3 font-medium">
      <div className="404 flex items-center justify-center space-x-3">
        <span>404</span>
        <span>Page not found</span>
      </div>
      <div className="go-back-home text-standardSize tablet:text-[0.985rem] font-[500] hover:text-white transition-colors delay-75 ease-linear flex items-center justify-center space-x-2">
        <Link to="/">Go back home</Link>
      </div>
    </div>
  );
};

export default Error;
