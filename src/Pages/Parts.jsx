import ContentView from "../Components/ContentView";
import SideSearch from "../Components/SideSearch";
import "../Css/Parts.css";
import img1 from "../assets/login/aa807ioox.webp";

import { Link } from "react-router-dom";
function Parts() {
  const data = [
    { name: "Engine", image: img1, link: "details" },
    { name: "Frame", image: img1, link: "details" },
    { name: "Engine", image: img1, link: "details" },
    { name: "Frame", image: img1, link: "details" },
    { name: "Engine", image: img1, link: "details" },
    { name: "Frame", image: img1, link: "details" },
  ];

  return (
    <div className="parts-body">
      <p className="red">Parts</p>
      <div className="flexs flex">
        <div className="left-side">
          <ContentView data={data} links={true}/>
        </div>
        <div className="right-side w-full">
          <SideSearch data={data} name="Agregates" />
        </div>
      </div>
    </div>
  );
}

export default Parts;
