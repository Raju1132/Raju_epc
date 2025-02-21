
import ContentView from "../Components/ContentView";
import SideSearch from "../Components/SideSearch";
import "../Css/Parts.css";

import img2 from "../assets/login/login3.jpg";

function DetailedParts() {
  const dataparts = [
    { name: "Engine2", image: img2 },
    { name: "Engine3", image: img2 },
    { name: "Engine2", image: img2 },
    { name: "Engine3", image: img2 },
    { name: "Engine2", image: img2 },
    { name: "Engine3", image: img2 },
  ];

 
  return (
    <div className="parts-body">
      <p className="red">Parts</p>
      <div className="flexs flex">
        <div className="left-side">
         <ContentView data={dataparts}/>
        </div>
        <div className="right-side">
          <SideSearch data={dataparts} name="Aggregates"/>
        </div>
      </div>
    </div>
  );
}

export default DetailedParts;
