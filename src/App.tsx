import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";

const App: React.FC = () => {
  return (
    <Router>
      <div className="bg-black">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
