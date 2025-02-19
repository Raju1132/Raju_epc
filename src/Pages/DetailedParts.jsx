
import "../Css/Parts.css";

import img2 from "../assets/login/login3.jpg";
import { Link } from "react-router-dom";
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
          {dataparts.map((item, key) => {
            return (
              <div key={key} className="card" >
                <p>E-{key + 2}</p>
                <img className="small-img" src={item.image} alt={item.name} />
                <p style={{ marginTop: "5px" }}>{item.name}</p>
              </div>
            );
          })}
        </div>
        <div className="right-side">
          <input type="text" placeholder="Search" />
          <div className="table w-full">
            <div className="aggregation">Aggregates</div>

            {dataparts.map((val, key) => {
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

export default DetailedParts;
