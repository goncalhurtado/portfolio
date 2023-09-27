import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <div className="row container">
        <div className="col-6 ">{/* <p>asd</p> */}</div>
        <div className="col-6">
          <NavBar />
        </div>
      </div>
    </>
  );
}

export default App;
