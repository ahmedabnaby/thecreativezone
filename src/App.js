import React from "react"
import Preloader from "./includes/Preloader"
import Navbar from "./includes/Navbar"
import Homepage from "./components/MainPages/Homepage";

function App() {
  return (
    <div>
      <Preloader/>
      <Navbar/>
      <Homepage/>
      {/* back to top */}
      <div className="back-to-top">
        <a href="#">
          <div className="back-toop-tooltip"><span>Back To Top</span></div>
          <div className="top-array" />
          <div className="top-line" />
        </a>
      </div>
      {/* back to top */}

    </div>
  );
}

export default App;
