import Header from "./components/Header";
import Filterbar from "./components/Filterbar";
import CardContainer from "./components/CardContainer";
import { useState } from "react";
// import data from "../data.json";

// const allTags = [];

// data.forEach((job) => {
//   allTags.push(job.role);
//   allTags.push(job.level);
//   allTags.push(job.tools);
//   allTags.push(job.languages);
// });

// const allFilterTags = allTags.flat().reduce(
//   (acc, currentTag) => {
//     if (!acc.includes(currentTag)) {
//       acc.push(currentTag);
//     }
//     return acc;
//   },
//   ["Frontend"]
// );

// console.log("filter tags", allFilterTags);

const filterTags = [];

function App() {
  const [view, setView] = useState("mobile");
  const [selectedFilters, setSelectedFilters] = useState([]);

  function reportWindowWidth() {
    console.log(window.innerWidth);
    if (window.innerWidth > 1440) {
      setView("desktop");
    } else {
      setView("mobile");
    }
  }
  window.onresize = reportWindowWidth;

  const addFilterTag = (e) => {
    // console.log(selectedFilters);
    if (!filterTags.includes(e.target.innerText)) {
      filterTags.push(e.target.innerText);
    }
    // console.log(filterTags);
    setSelectedFilters([...filterTags]);
  };

  return (
    <>
      <Header view={view} />
      <Filterbar
        selectedFilters={selectedFilters}
        setSelectedFilters={setSelectedFilters}
      />
      <div className="container">
        <CardContainer addFilterTag={addFilterTag} />
      </div>
    </>
  );
}

export default App;
