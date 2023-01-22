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

const Technologies = () => {
  return (
    <div className="text-standardGray w-fit">
      <ul className="flex flex-col space-y-2">
        <li
          className="flex items-end space-x-2 hover:text-white cursor-default"
          title="React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library[3] for building user interfaces based on UI components."
        >
          <ArrowRight />
          <ReactJS />
          <p className="text-standardSize font-[500]">React JS</p>
        </li>
        <li
          className="flex items-end space-x-2 hover:text-white cursor-default"
          title="Tailwind CSS is an open source CSS framework. The main feature of this library is that, unlike other CSS frameworks like Bootstrap, it does not provide a series of predefined classes for elements such as buttons or tables."
        >
          <ArrowRight />
          <TailwindCSS />
          <p className="text-standardSize font-[500]">Tailwind CSS</p>
        </li>
        <li
          className="flex items-end space-x-2 hover:text-white cursor-default"
          title="TypeScript is a free and open source programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language."
        >
          <ArrowRight />
          <TypeScript />
          <p className="text-standardSize font-[500]">TypeScript</p>
        </li>
        <li
          className="flex items-end space-x-2 hover:text-white cursor-default"
          title="JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries."
        >
          <ArrowRight />
          <JavaScript />
          <p className="text-standardSize font-[500]">JavaScript</p>
        </li>
        <li
          className="flex items-end space-x-2 hover:text-white cursor-default"
          title="Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML (including XML dialects such as SVG, MathML or XHTML)."
        >
          <ArrowRight />
          <CSS />
          <p className="text-standardSize font-[500]">CSS</p>
        </li>
        <li
          className="flex items-end space-x-2 hover:text-white cursor-default"
          title="The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser."
        >
          <ArrowRight />
          <HTML />
          <p className="text-standardSize font-[500]">HTML</p>
        </li>
        <li
          className="flex items-end space-x-2 hover:text-white cursor-default"
          title="Firebase is a set of hosting services for any type of application (Android, iOS, Javascript, Node.js, Java, Unity, PHP, C++ ...)."
        >
          <ArrowRight />
          <Firebase />
          <p className="text-standardSize font-[500]">Firebase</p>
        </li>
        <li
          className="flex items-end space-x-2 hover:text-white cursor-default"
          title="npm (originally short for Node Package Manager)[3] is a package manager for the JavaScript programming language maintained by npm, Inc."
        >
          <ArrowRight />
          <NPM />
          <p className="text-standardSize font-[500]">NPM</p>
        </li>
        <li
          className="flex items-end space-x-2 hover:text-white cursor-default"
          title="MUI offers a comprehensive suite of UI tools to help you ship new features faster."
        >
          <ArrowRight />
          <MaterialUI />
          <p className="text-standardSize font-[500]">Material UI</p>
        </li>
      </ul>
    </div>
  );
};

export default Technologies;
