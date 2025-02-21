import { Link } from "react-router-dom";

function SideSearch(props) {
  return (
    <div className="border border-gary-600">
      <input type="text" placeholder="Search" className="w-full !p-2"/>
      <div className=" w-full">
        <div className=" !mt-1 !p-2 bg-gray-300">{props.name}</div>
        <div className="  flex flex-col">
          {props.data.map((val, key) => {
            return (
              <Link to={`${val.name}`} className="!p-2 border border-gary-100" key={key}>
                {val.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SideSearch;
