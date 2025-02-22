import React from "react";

function Favorites() {
  return (
    <div className="">
    <div className="!mt-20 flex justify-between !mx-2">
      <div className="text-[#c31c00] font-bold ">Favorites</div>
      <div className="flex gap-5">
        <div className=" flex justify-center items-center gap-2">
          <input type="checkbox" name="" id="" />
          <p> Clear Contents On Logout</p>
        </div>
        <button>Clear Favorites</button>
      </div>
    </div>
    <div className="">
      favorites...
    </div>
    </div>
  );
}

export default Favorites;
