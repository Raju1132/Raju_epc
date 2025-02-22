import React, { useState } from "react";
import {
  AiOutlineFolder,
  AiOutlineFolderOpen,
  AiOutlineFile
} from "react-icons/ai";
import { MdOutlineArrowRight, MdOutlineArrowDropDown  } from "react-icons/md";

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
              name: "Engine",
              files: [
                {
                  type: "file",
                  name: "CAM CHAIN/TENSIONER",
                },
              ],
            },
            {
              type: "folder",
              name: "Frame",
              files: [
                { type: "file", name: "Break Pipe" },
                { type: "file", name: "Canister" },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "folder",
      name: "CB500F",
      files: [
        {
          type: "folder",
          name: "CB500FAM",
          files: [
            {
              type: "folder",
              name: "Engine",
              files: [
                {
                  type: "file",
                  name: "Timing Chain",
                },
              ],
            },
            {
              type: "folder",
              name: "Transmission",
              files: [
                { type: "file", name: "Clutch Plate" },
                { type: "file", name: "Gear Shaft" },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "folder",
      name: "Activa",
      files: [
        {
          type: "folder",
          name: "Activa i",
          files: [
            {
              type: "folder",
              name: "Engine",
              files: [
                {
                  type: "file",
                  name: "Oil Filter",
                },
              ],
            },
            {
              type: "folder",
              name: "Suspension",
              files: [
                { type: "file", name: "Shock Absorber" },
                { type: "file", name: "Spring" },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "folder",
      name: "CB Hornet 160R",
      files: [
        {
          type: "folder",
          name: "CB Hornet 160RAM",
          files: [
            {
              type: "folder",
              name: "Chassis",
              files: [
                { type: "file", name: "Handlebar" },
                { type: "file", name: "Foot Peg" },
              ],
            },
            {
              type: "folder",
              name: "Exhaust",
              files: [
                { type: "file", name: "Muffler" },
                { type: "file", name: "Exhaust Pipe" },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "folder",
      name: "CB Shine",
      files: [
        {
          type: "folder",
          name: "CB Shine AM",
          files: [
            {
              type: "folder",
              name: "Battery",
              files: [
                { type: "file", name: "Battery Terminals" },
                { type: "file", name: "Battery Charger" },
              ],
            },
            {
              type: "folder",
              name: "Wheels",
              files: [
                { type: "file", name: "Rim" },
                { type: "file", name: "Tire" },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "folder",
      name: "Africa Twin",
      files: [
        {
          type: "folder",
          name: "Africa Twin AM",
          files: [
            {
              type: "folder",
              name: "Engine",
              files: [
                { type: "file", name: "Cylinder Head" },
                { type: "file", name: "Exhaust Valve" },
              ],
            },
            {
              type: "folder",
              name: "Air Filter",
              files: [
                { type: "file", name: "Air Filter Element" },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "folder",
      name: "CB Unicorn",
      files: [
        {
          type: "folder",
          name: "CB Unicorn Dazzler",
          files: [
            {
              type: "folder",
              name: "Electrical",
              files: [
                { type: "file", name: "Battery Wiring" },
                { type: "file", name: "Ignition Coil" },
              ],
            },
            {
              type: "folder",
              name: "Brakes",
              files: [
                { type: "file", name: "Brake Pads" },
                { type: "file", name: "Brake Lever" },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "folder",
      name: "CB300R",
      files: [
        {
          type: "folder",
          name: "CB300RAM",
          files: [
            {
              type: "folder",
              name: "Frame",
              files: [
                { type: "file", name: "Frame Mount" },
                { type: "file", name: "Subframe" },
              ],
            },
            {
              type: "folder",
              name: "Suspension",
              files: [
                { type: "file", name: "Front Forks" },
                { type: "file", name: "Rear Shock" },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "folder",
      name: "CB650R",
      files: [
        {
          type: "folder",
          name: "CB650RAM",
          files: [
            {
              type: "folder",
              name: "Fuel System",
              files: [
                { type: "file", name: "Fuel Pump" },
                { type: "file", name: "Fuel Injector" },
              ],
            },
            {
              type: "folder",
              name: "Wheels",
              files: [
                { type: "file", name: "Front Wheel" },
                { type: "file", name: "Rear Wheel" },
              ],
            },
          ],
        },
      ],
    },
  ];


  // State to manage folder open/close
  const [openedFolders, setOpenedFolders] = useState([]);

  // Toggle folder state
  const toggleFolder = (folderName) => {
    setOpenedFolders((prevOpenedFolders) => {
      if (prevOpenedFolders.includes(folderName)) {
        return prevOpenedFolders.filter((name) => name !== folderName);
      } else {
        return [...prevOpenedFolders, folderName];
      }
    });
  };

  // Recursive function to render folders with increasing margin
  const renderFolder = (folder, level = 0) => {
    const isFolderOpen = openedFolders.includes(folder.name);

    return (
      <div key={folder.name} className="ml-5 w-fit">
        <div className="flex cursor-pointer items-center" onClick={() => toggleFolder(folder.name)}>
          {folder.files && folder.files.length > 0 && (
            <div className="mr-2">
              {isFolderOpen ? <MdOutlineArrowDropDown /> : <MdOutlineArrowRight />}
            </div>
          )}
          {isFolderOpen?<AiOutlineFolderOpen/>:<AiOutlineFolder />}
          {folder.name}
        </div>
        {isFolderOpen && folder.files && (
          <div style={{ marginLeft: `${(level + 1) * 20}px` }}>
            {folder.files.map((file) =>
              file.type === "folder" ? renderFolder(file, level + 1) : (
                <div key={file.name} className="ml-5">
                  <AiOutlineFile  className="inline" />
                  {file.name}
                </div>
              )
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="!my-20 ">
      <div className="text-[#c31c00] font-bold te !mx-2">Products</div>
      <div className="!ml-5">
      {structure.map((folder) => renderFolder(folder))}
      </div>
    </div>
  );
}

export default Products;
