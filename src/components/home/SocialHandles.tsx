import GitHub from "./icons/GitHub";
import Instagram from "./icons/Instagram";
import LinkedIn from "./icons/LinkedIn";
import Twitter from "./icons/Twitter";

const SocialHandles = () => {
  return (
    <div className="social-handles text-white mx-auto">
      <ul className="text-gray-500 flex items-center justify-center space-x-3">
        <li className="twitter">
          <a href="https://twitter.com/iamnazeef_" target="_block">
            <Twitter />
          </a>
        </li>
        <li className="linkedin">
          <a
            href="https://www.linkedin.com/in/nazeef-muhammed/"
            target="_block"
          >
            <LinkedIn />
          </a>
        </li>
        <li className="github">
          <a href="https://github.com/iamnazeef" target="_block">
            <GitHub />
          </a>
        </li>
        <li className="instagram">
          <a href="https://www.instagram.com/iamnazeef/" target="_block">
            <Instagram />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialHandles;
