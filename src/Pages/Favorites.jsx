import React from "react";

function Favorites() {
  return (
    <div className="!mt-20 flex justify-between">
      <div className="text-[#c31c00] font-bold !mx-2">Favorites</div>
      <div className="flex gap-5">
        <div className=" flex justify-center items-center">
          <input type="checkbox" name="" id="" />
          <p> Clear Contents On Logout</p>
        </div>
        <button>Clear Favorites</button>
      </div>
    </div>
  );
}

export default Favorites;
