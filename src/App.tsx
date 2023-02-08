import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import TechStack from "./pages/TechStack";
import PageNotFound from "./pages/PageNotFound";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Projects />} />
          <Route path="projects" element={<Projects />} />
          <Route path="tech-stack" element={<TechStack />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
