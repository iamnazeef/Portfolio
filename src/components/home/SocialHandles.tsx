import GitHub from "./icons/GitHub";
import Instagram from "./icons/Instagram";
import LinkedIn from "./icons/LinkedIn";
import Twitter from "./icons/Twitter";
import { Tooltip } from "@material-tailwind/react";

const SocialHandles = () => {
  return (
    <div className="social-handles text-white mx-auto">
      <ul className="text-gray-500 flex items-center justify-center space-x-3">
        <Tooltip
          content="twitter.com/iamnazeef_"
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0, y: 25 },
          }}
          placement="bottom"
          className="font-manrope text-xs laptop:text-sm text-gray-300 mt-1"
        >
          <li className="twitter">
            <a href="https://twitter.com/iamnazeef_" target="_block">
              <Twitter />
            </a>
          </li>
        </Tooltip>
        <Tooltip
          content="linkedin.com/nazeef-muhammed"
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0, y: 25 },
          }}
          placement="bottom"
          className="font-manrope text-xs laptop:text-sm text-gray-300 mt-1"
        >
          <li className="linkedin">
            <a
              href="https://www.linkedin.com/in/nazeef-muhammed/"
              target="_block"
            >
              <LinkedIn />
            </a>
          </li>
        </Tooltip>
        <Tooltip
          content="github.com/iamnazeef"
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0, y: 25 },
          }}
          placement="bottom"
          className="font-manrope text-xs laptop:text-sm text-gray-300 mt-1"
        >
          <li className="github">
            <a href="https://github.com/iamnazeef" target="_block">
              <GitHub />
            </a>
          </li>
        </Tooltip>
        <Tooltip
          content="instagram.com/iamnazeef"
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0, y: 25 },
          }}
          placement="bottom"
          className="font-manrope text-xs laptop:text-sm text-gray-300 mt-1"
        >
          <li className="instagram">
            <a href="https://www.instagram.com/iamnazeef/" target="_block">
              <Instagram />
            </a>
          </li>
        </Tooltip>
      </ul>
    </div>
  );
};

export default SocialHandles;
