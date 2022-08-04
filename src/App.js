import "./App.css";
// import header from "./components/header.js";
import Header from "./components/header";

import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [image, setImage] = useState("");

  useEffect(() => {
    const callChart = async () => {
      let yearPopulations = [];
      let yearDates = [];
      const dataUSA = await axios.get(
        `https://datausa.io/api/data?drilldowns=Nation&measures=Population`
      );
      dataUSA.data.data.forEach((year) => {
        yearPopulations.push(year.Population);
        yearDates.push(year.Year);
      });
      setImage(
        `https://image-charts.com/chart?cht=bvo&chs=700x550&chd=a:${yearPopulations.join(
          ","
        )}&chan=1000,easeInCubic&chxt=x,y&chg=20,20&chxl=0:|${yearDates.join(
          "|"
        )}`
      );
    };
    callChart();
  }, []);

  return (
    <div className="App">
      <Header />
      <img src={image} alt="DataUSA Chart" />
    </div>
  );
}

export default App;
