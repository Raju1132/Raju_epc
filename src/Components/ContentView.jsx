import React from "react";
import "../Css/Parts.css";
import { Link } from "react-router-dom";
function ContentView(props) {
  return (
    <>
      {props.links
        ? props.data.map((item, key) => {
            return (
              <Link to={item.link} key={key} className="card">
                <img className="small-img" src={item.image} alt={item.name} />
                <p style={{ marginTop: "5px" }}>{item.name}</p>
              </Link>
            );
          })
        : props.data.map((item, key) => {
            return (
              <div key={key} className="card">
                <img className="small-img" src={item.image} alt={item.name} />
                <p style={{ marginTop: "5px" }}>{item.name}</p>
              </div>
            );
          })}
    </>
  );
}

export default ContentView;
