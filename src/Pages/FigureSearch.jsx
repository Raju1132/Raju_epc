import React from "react";
import ContentView from "../Components/ContentView";
import img1 from "../assets/home/honda-activa-5g-exterior-1.webp";
import img2 from "../assets/login/png-transparent-honda-livo-bike.png";

import SideSearch from "../Components/SideSearch";

function FigureSearch() {
  const images = [
    { image: img1, name: "Activa" },
    { image: img2, name: "Bike" },
  ];
  return (
    <div className="!mt-20 !px-3">
      <p className="text-[#c31c00] font-bold uppercase !text-sm">
        Figure Search
      </p>
      <div className="flex gap-2 ">
        <div className="w-[70%] flex border">
          <ContentView data={images} />{" "}
        </div>

        <div className="w-[30%]">
          <SideSearch data={images} name="Figure Search" />
        </div>
      </div>
    </div>
  );
}

export default FigureSearch;
