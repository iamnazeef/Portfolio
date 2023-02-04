import ArrowRight from "./Icons/ArrowRight";
import CSS from "./Icons/CSS";
import Firebase from "./Icons/Firebase";
import HTML from "./Icons/HTML";
import JavaScript from "./Icons/JavaScript";
import MaterialUI from "./Icons/MaterialUI";
import NPM from "./Icons/NPM";
import ReactJS from "./Icons/ReactJS";
import TailwindCSS from "./Icons/TailwindCSS";
import TypeScript from "./Icons/TypeScript";
import { Tooltip } from "@material-tailwind/react";

const Technologies = () => {
  return (
    <section className="text-standardGray w-fit">
      <ul className="flex flex-col space-y-2 text-standardGray font-[500]">
        <Tooltip
          content="React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library[3] for building user interfaces based on UI components."
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0, y: 25 },
          }}
          placement="right"
          className="font-manrope text-xs bg-gray-900 laptop:text-sm max-w-[600px] text-gray-300 mt-1"
        >
          <li className="flex items-end space-x-2 hover:text-gray-200 cursor-help">
            <ArrowRight />
            <ReactJS />
            <p>React JS</p>
          </li>
        </Tooltip>
        <Tooltip
          content="Tailwind CSS is an open source CSS framework. The main feature of this library is that, unlike other CSS frameworks like Bootstrap, it does not provide a series of predefined classes for elements such as buttons or tables."
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0, y: 25 },
          }}
          placement="right"
          className="font-manrope text-xs bg-gray-900 laptop:text-sm max-w-[600px] text-gray-300 mt-1"
        >
          <li className="flex items-end space-x-2 hover:text-gray-200 cursor-help">
            <ArrowRight />
            <TailwindCSS />
            <p>Tailwind CSS</p>
          </li>
        </Tooltip>
        <Tooltip
          content="TypeScript is a free and open source programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language."
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0, y: 25 },
          }}
          placement="right"
          className="font-manrope text-xs bg-gray-900 laptop:text-sm max-w-[600px] text-gray-300 mt-1"
        >
          <li className="flex items-end space-x-2 hover:text-gray-200 cursor-help">
            <ArrowRight />
            <TypeScript />
            <p>TypeScript</p>
          </li>
        </Tooltip>
        <Tooltip
          content="JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries."
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0, y: 25 },
          }}
          placement="right"
          className="font-manrope text-xs bg-gray-900 laptop:text-sm max-w-[600px] text-gray-300 mt-1"
        >
          <li className="flex items-end space-x-2 hover:text-gray-200 cursor-help">
            <ArrowRight />
            <JavaScript />
            <p>JavaScript</p>
          </li>
        </Tooltip>
        <Tooltip
          content="Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML (including XML dialects such as SVG, MathML or XHTML)."
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0, y: 25 },
          }}
          placement="right"
          className="font-manrope text-xs bg-gray-900 laptop:text-sm max-w-[600px] text-gray-300 mt-1"
        >
          <li className="flex items-end space-x-2 hover:text-gray-200 cursor-help">
            <ArrowRight />
            <CSS />
            <p>CSS</p>
          </li>
        </Tooltip>
        <Tooltip
          content="The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser."
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0, y: 25 },
          }}
          placement="right"
          className="font-manrope text-xs bg-gray-900 laptop:text-sm max-w-[600px] text-gray-300 mt-1"
        >
          <li className="flex items-end space-x-2 hover:text-gray-200 cursor-help">
            <ArrowRight />
            <HTML />
            <p>HTML</p>
          </li>
        </Tooltip>
        <Tooltip
          content="Firebase is a set of hosting services for any type of application (Android, iOS, Javascript, Node.js, Java, Unity, PHP, C++ ...)."
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0, y: 25 },
          }}
          placement="right"
          className="font-manrope text-xs bg-gray-900 laptop:text-sm max-w-[600px] text-gray-300 mt-1"
        >
          <li className="flex items-end space-x-2 hover:text-gray-200 cursor-help">
            <ArrowRight />
            <Firebase />
            <p>Firebase</p>
          </li>
        </Tooltip>
        <Tooltip
          content="npm (originally short for Node Package Manager)[3] is a package manager for the JavaScript programming language maintained by npm, Inc."
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0, y: 25 },
          }}
          placement="right"
          className="font-manrope text-xs bg-gray-900 laptop:text-sm max-w-[600px] text-gray-300 mt-1"
        >
          <li className="flex items-end space-x-2 hover:text-gray-200 cursor-help">
            <ArrowRight />
            <NPM />
            <p>NPM</p>
          </li>
        </Tooltip>
        <Tooltip
          content="MUI offers a comprehensive suite of UI tools to help you ship new features faster."
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0, y: 25 },
          }}
          placement="right"
          className="font-manrope text-xs bg-gray-900 laptop:text-sm max-w-[600px] text-gray-300 mt-1"
        >
          <li className="flex items-end space-x-2 hover:text-gray-200 cursor-help">
            <ArrowRight />
            <MaterialUI />
            <p>Material UI</p>
          </li>
        </Tooltip>
      </ul>
    </section>
  );
};

export default Technologies;
