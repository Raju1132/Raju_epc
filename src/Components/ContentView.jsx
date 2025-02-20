import React from "react";

function ContentView(props) {
  return (
    <div className="!p-3 border border-gray-400 flex flex-wrap flex-col md:flex-row">
      {props.dataparts.map((item, key) => {
        return (
          <div key={key} className="flex justify-center items-center">
            <p>E-{key + 2}</p>
            <img className="small-img" src={item.image} alt={item.name} />
            <p style={{ marginTop: "5px" }}>{item.name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default ContentView;
