import img from "../assets/Accessories/accessories.png";
import img1 from "../assets/Accessories/accessories1.png";
import img2 from "../assets/Accessories/accessories2.png";
import img3 from "../assets/Accessories/accessories3.png";
import img4 from "../assets/Accessories/accessories4.png";
import img5 from "../assets/Accessories/accessories5.png";
import img6 from "../assets/Accessories/accessories6.png";
import img7 from "../assets/Accessories/accessories7.png";

import ContentView from "../Components/ContentView";
import SideSearch from "../Components/SideSearch";
function Accessories() {
  const AccessoriesData = [
    {
      name: "Owner Manual",
      image: img,
    },
    {
      name: "Special Tools",
      image: img1,
    },
    {
      name: "Battery",
      image: img2,
    },
    {
      name: "Service Kits",
      image: img3,
    },
    {
      name: "Engine Oils",
      image: img4,
    },
    {
      name: "Accessories",
      image: img5,
    },
    {
      name: "Merchandies",
      image: img6,
    },
    {
      name: "Consumables",
      image: img7,
    },
  ];
  return (
    <div className="!mt-20">
      <div className="flex gap-2 !m-2">
        <div className="w-[70%] flex border flex-wrap">
          <ContentView data={AccessoriesData} links={true}/>
        </div>
        <div className="w-[30%]">
          <SideSearch name="Accessories" data={AccessoriesData} />
        </div>
      </div>
    </div>
  );
}

export default Accessories;
