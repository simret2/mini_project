// import './App.css';
// import header from "./components/header.js";

import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [image, setImage] = useState('');

  useEffect(() => {
    const callChart = async () => {
      let yearPopulations = [];
      let yearDates = []
      const dataUSA = await axios.get(`https://datausa.io/api/data?drilldowns=Nation&measures=Population`);
      dataUSA.data.data.forEach((year) => {
        yearPopulations.push(year.Population)
        yearDates.push(year.Year);
      });
     // console.log(yearPopulations.join());
     // console.log(yearDates.join('|'));
      setImage(`https://image-charts.com/chart?chs=700x550&chd=a:${yearPopulations}&chl=${yearDates}&cht=bvs&chan&chf=b0,lg,0,fdb45c,0,ed7e30,1`)
    }
    callChart();
  }, [])
  

  return (
    
<div>
 <img src={image}/>
</div>
  
  );
}


export default App;
