import React from "react";
import { CiFolderOn } from "react-icons/ci";
import { MdOutlineArrowRight } from "react-icons/md";
function Products() {
  const structure = [
    {
      type: "folder",
      name: "500X",
      files: [
        {
          type: "folder",
          name: "CB500XAM",
          files: [
            {
              type: "folder",
              name: "CB500XA555",
              files: [
                {
                  type: "file",
                  name: "CAM CHAIN/TENSIONER",
                },
              ],
            },
          ],
        },
        {
          type: "folder",
          name: "components",
          files: [
            { type: "file", name: "Tree.js" },
            { type: "file", name: "Tree.style.js" },
          ],
        },
        { type: "file", name: "setup.js" },
        { type: "file", name: "setupTests.js" },
      ],
    },
    {
      type: "folder",
      name: "packages",
      files: [
        {
          type: "file",
          name: "main.js",
        },
      ],
    },
    { type: "file", name: "index.js" },
  ];

  const folder = [
    { name: "500X" },
    { name: "Activa" },
    { name: "Activa i" },
    { name: "Activa125" },
    { name: "Africa Twin" },
    { name: "Aviator" },
    { name: "CB Hornet 160R" },
    { name: "CB Shine" },
    { name: "CB Shine SP" },
    { name: "CB Trigger" },
    { name: "CB Twister" },
    { name: "CB Unicorn" },
    { name: "CB Unicorn 160" },
    { name: "CB Unicorn Dazzler" },
    { name: "CB200X" },
    { name: "CB300F" },
    { name: "CB300R" },
    { name: "CB350" },
    { name: "CB650R" },
    { name: "CBF Stunner" },
  ];
  return (
    <div className="!mt-20">
      <div className="text-[#c31c00] font-bold  !mx-2">Products</div>
      {folder.map((value, key) => {
        return (
          <div className="flex ">
            <div className="flex cursor-pointer w-fit items-center">
              <MdOutlineArrowRight />
              <CiFolderOn />
              {value.name}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
