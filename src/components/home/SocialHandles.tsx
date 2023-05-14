import GitHub from "./icons/GitHub";
import LinkedIn from "./icons/LinkedIn";
import { Tooltip } from "@material-tailwind/react";
import Twitter from "./icons/Twitter";

const SocialHandles: React.FC = () => {
  return (
    <nav className="social-handles mx-auto">
      <ul className="text-gray-500 flex items-center justify-center space-x-3">
        <Tooltip
          content="github.com/iamnazeef"
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0, y: 25 },
          }}
          placement="bottom"
          className="font-manrope text-xs laptop:text-sm text-gray-300 mt-1 bg-gray-900"
        >
          <li className="github">
            <a
              href="https://github.com/iamnazeef"
              target="_block"
              aria-label="Visit my GitHub account"
              className="flex items-center gap-1 font-manrope font-semibold hover:text-gray-200 tracking-wide"
            >
              <GitHub /> <span className="hidden tablet:block">GitHub</span>
            </a>
          </li>
        </Tooltip>
        <div className="h-4 bg-gray-500 w-[0.10rem]"></div>
        <Tooltip
          content="linkedin.com/in/nazeef-muhammed"
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0, y: 25 },
          }}
          placement="bottom"
          className="font-manrope text-xs laptop:text-sm text-gray-300 mt-1 bg-gray-900"
        >
          <li className="linkedin">
            <a
              href="https://www.linkedin.com/in/nazeef-muhammed/"
              target="_block"
              aria-label="Visit my LinkedIn account"
              className="flex items-center gap-1 font-manrope font-semibold hover:text-gray-200 tracking-wide"
            >
              <LinkedIn /> <span className="hidden tablet:block">LinkedIn</span>
            </a>
          </li>
        </Tooltip>
        <div className="h-4 bg-gray-500 w-[0.10rem]"></div>
        <Tooltip
          content="linkedin.com/in/nazeef-muhammed"
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0, y: 25 },
          }}
          placement="bottom"
          className="font-manrope text-xs laptop:text-sm text-gray-300 mt-1 bg-gray-900"
        >
          <li className="linkedin">
            <a
              href="https://twitter.com/iamnazeef_"
              target="_block"
              aria-label="Visit my LinkedIn account"
              className="flex items-center gap-1 font-manrope font-semibold hover:text-gray-200 tracking-wide"
            >
              <Twitter /> <span className="hidden tablet:block">Twitter</span>
            </a>
          </li>
        </Tooltip>
      </ul>
    </nav>
  );
};

export default SocialHandles;
