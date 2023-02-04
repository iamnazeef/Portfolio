import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
const LazyTechStack = lazy(() => import("./pages/TechStack"));
const LazyPageNotFound = lazy(() => import("./pages/PageNotFound"));

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Projects />} />
          <Route path="projects" element={<Projects />} />
          <Route
            path="tech-stack"
            element={
              <Suspense fallback="loading...">
                <LazyTechStack />
              </Suspense>
            }
          />
        </Route>
        <Route
          path="*"
          element={
            <Suspense fallback="loading...">
              <LazyPageNotFound />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
