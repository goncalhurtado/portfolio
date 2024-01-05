import "./App.css";
import NavBar from "./components/NavBar";
import GoncalCard from "./components/GoncalCard";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import { useEffect, useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (!darkMode) {
      document.body.classList.add("animated-backgroundLight");
    } else {
      document.body.classList.remove("animated-backgroundLight");
    }
  }, [darkMode]);

  return (
    <div className="containerApp">
      <div className="row">
        <div className="col-12 col-sm-3 DnoneSm">
          <GoncalCard darkMode={darkMode} />
        </div>
        <div className="col-12 col-sm-9">
          <div className="mb-3">
            {" "}
            <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
          </div>
          <Routes>
            <Route path="/*" element={<Home darkMode={darkMode} />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
            <Route
              path="/projects"
              element={<Projects darkMode={darkMode} />}
            />
            <Route
              path="/education"
              element={<Education darkMode={darkMode} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
