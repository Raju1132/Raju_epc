
import "../Css/Parts.css";
import img1 from "../assets/login/aa807ioox.webp";

import { Link } from "react-router-dom";
function Parts() {
  const data = [
    { name: "Engine", image: img1 },
    { name: "Frame", image: img1 },
    { name: "Engine", image: img1 },
    { name: "Frame", image: img1 },
    { name: "Engine", image: img1 },
    { name: "Frame", image: img1 },
  ];

 
  return (
    <div className="parts-body">
     <p className="red">Parts</p> 
      <div className="flexs flex">
        <div className="left-side">
          {
            data.map((item, key) => {
              return (
                <Link to={`details`} key={key} className="card" >
                  
                  <img className="small-img" src={item.image} alt={item.name} />
                  <p>{item.name}</p>
                </Link>
              );
            })
          }
        </div>
        <div className="right-side w-full">
          <input type="text" placeholder="Search" />
          <div className="table w-full">
            <div className="aggregation ">Aggregates</div>

            {data.map((val, key) => {
              return (
                <Link to={`parts/${val.name}`} className="fields" key={key}>
                  {val.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Parts;
