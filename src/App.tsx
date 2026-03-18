import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import StartProject from "./pages/StartProject";
import { AnimatePresence } from "motion/react";

export default function App() {
  return (
    <Router>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/start-project" element={<StartProject />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}
