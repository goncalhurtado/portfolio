import "./App.css";
import NavBar from "./components/NavBar";
import GoncalCard from "./components/GoncalCard";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Projects from "./pages/projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <div className="row container">
        <div className="col-6 ">{/* <p>asd</p> */}</div>
        <div className="col-6">
          <NavBar />
        </div>
      </div>
      <div className="row container">
        <div className="col-6 ">
          <GoncalCard />
        </div>
        <div className="col-6">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
