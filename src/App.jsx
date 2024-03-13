import Header from "./components/Header";
import Filterbar from "./components/Filterbar";
import CardContainer from "./components/CardContainer";
import { useState } from "react";

function App() {
  const [view, setView] = useState("mobile");

  function reportWindowWidth() {
    console.log(window.innerWidth);
    if (window.innerWidth > 1440) {
      setView("desktop");
    } else {
      setView("mobile");
    }
  }
  window.onresize = reportWindowWidth;
  return (
    <>
      <Header view={view} />
      <Filterbar />
      <div className="container">
        <CardContainer />
      </div>
    </>
  );
}

export default App;
