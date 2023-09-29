import "./App.css";
import NavBar from "./components/NavBar";
import GoncalCard from "./components/GoncalCard";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Education from "./pages/Education";

function App() {
  return (
    <>
      <div className="row container mb-4">
        <div className="col-7"></div>
        <div className="col-5">
          <NavBar />
        </div>
      </div>
      <div className="row container">
        <div className="col-4 ">
          <GoncalCard />
        </div>
        <div className="col-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/education" element={<Education />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
