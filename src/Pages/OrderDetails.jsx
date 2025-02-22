import { MdDescription } from "react-icons/md";

function OrderDetails() {
  const orderList = [
    {
      orderId: "#11837",
      orderDate: "12/01/2024",
      total: 59999,
      shipAddress: "Delhi",
      orderDetails: [
        {
          partID: "16100-KSP-B11",
          description: " CARBURETOR ASSY.(AVK4FF A)",
          quantity: 2,
          price: 5552,
          status: "shipped",
          contact: "9501235412",
          distributor: "BAJRANG AUTO AGENCY",
        },
        {
          partID: "18392-KSP-K22",
          description: "AIR FILTER ASSY. (A1T5FF B)",
          quantity: 3,
          price: 4320,
          status: "shipped",
          contact: "9876543210",
          distributor: "SHIV AUTO SUPPLY",
        },
        {
          partID: "16230-JDC-P33",
          description: "CLUTCH ASSEMBLY (X7RT5G C)",
          quantity: 1,
          price: 7500,
          status: "pending",
          contact: "9887654321",
          distributor: "RAJ AUTO PARTS",
        },
        {
          partID: "17450-HTD-K11",
          description: "ENGINE BLOCK (HY5U6D D)",
          quantity: 5,
          price: 13400,
          status: "shipped",
          contact: "9701234567",
          distributor: "AUTO WORLD",
        },
        {
          partID: "15023-ABJ-K21",
          description: "SPARK PLUG (W9A7FF E)",
          quantity: 10,
          price: 250,
          status: "in transit",
          contact: "9526789012",
          distributor: "VIKAS MOTOR PARTS",
        },
        {
          partID: "19875-KLS-N12",
          description: "FUEL PUMP ASSEMBLY (G7B9FF A)",
          quantity: 4,
          price: 3450,
          status: "shipped",
          contact: "9234567890",
          distributor: "MOTORS & PARTS",
        },
      ],
    },
    {
      orderId: "#21847",
      orderDate: "02/10/2025",
      total: 45800,
      shipAddress: "Mumbai",
      orderDetails: [
        {
          partID: "16230-JDC-P33",
          description: "CLUTCH ASSEMBLY (X7RT5G C)",
          quantity: 1,
          price: 7500,
          status: "shipped",
          contact: "9487654321",
          distributor: "RAJ AUTO PARTS",
        },
        {
          partID: "19875-KLS-N12",
          description: "FUEL PUMP ASSEMBLY (G7B9FF A)",
          quantity: 2,
          price: 3450,
          status: "pending",
          contact: "9234567890",
          distributor: "MOTORS & PARTS",
        },
        {
          partID: "17450-HTD-K11",
          description: "ENGINE BLOCK (HY5U6D D)",
          quantity: 3,
          price: 13400,
          status: "shipped",
          contact: "9701234567",
          distributor: "AUTO WORLD",
        },
      ],
    },
    {
      orderId: "#31385",
      orderDate: "01/12/2025",
      total: 17500,
      shipAddress: "Chennai",
      orderDetails: [
        {
          partID: "15023-ABJ-K21",
          description: "SPARK PLUG (W9A7FF E)",
          quantity: 8,
          price: 250,
          status: "shipped",
          contact: "9356789012",
          distributor: "VIKAS MOTOR PARTS",
        },
        {
          partID: "18392-KSP-K22",
          description: "AIR FILTER ASSY. (A1T5FF B)",
          quantity: 2,
          price: 4320,
          status: "shipped",
          contact: "9876543210",
          distributor: "SHIV AUTO SUPPLY",
        },
      ],
    },
    {
      orderId: "#41072",
      orderDate: "11/23/2024",
      total: 13250,
      shipAddress: "Kolkata",
      orderDetails: [
        {
          partID: "16100-KSP-B11",
          description: "CARBURETOR ASSY.(AVK4FF A)",
          quantity: 3,
          price: 5552,
          status: "shipped",
          contact: "9501235412",
          distributor: "BAJRANG AUTO AGENCY",
        },
        {
          partID: "17450-HTD-K11",
          description: "ENGINE BLOCK (HY5U6D D)",
          quantity: 2,
          price: 13400,
          status: "in transit",
          contact: "9723456789",
          distributor: "AUTO WORLD",
        },
      ],
    },
  ];

  return (
    <div className="!mt-16 md:!mt-24 md:!mx-4 ">
      <div className=" w-full flex flex-col md:justify-between md:flex-row">
        <p className="!ml-2  !text-2xl ">Orders</p>
        <div className=" w-full  flex  justify-center md:justify-end items-center gap-4">
          <input
            type="text"
            className="!p-2 md:w-96 w-64 rounded"
            placeholder="Search all orders..."
          />
          <button>Search</button>
        </div>
      </div>
      <div className=" !pl-4">Total Order: <span className=" ">{orderList.length}</span></div>
      <div className=" flex flex-col gap-5 !my-5">
        {orderList.map((data, key) => {
          return (
            <div className="flex flex-col gap-10 border-t-4  !py-2" key={key}>
              <div className=" flex justify-between items-center bg-neutral-800 text-white !px-4 rounded md:!px-20 !py-2  ">
                <p>
                  ID: <br /> {data.orderId}
                </p>
                <p>
                  Data: <br /> {data.orderDate}
                </p>
                <p>
                  Address: <br />
                  {data.shipAddress}
                </p>
                <p>
                  Total: <br />
                  {data.total}
                </p>
              </div>
              {data.orderDetails.map((value, key2) => {
                return (
                  <div className="!px-4 !py-2 border" key={key2}>
                    <p className="font-bold">Part ID: {value.partID}</p>
                    <p>Description: {value.description}</p>
                    <p>Quantity: {value.quantity}</p>
                    <p className="font-bold">Price: {value.price}</p>
                    <p className="font-bold">Status: {value.status}</p>
                    <p className="font-bold text-[#c31c00]">Distributor: {value.distributor}</p>
                    <p>Contact: {value.contact}</p>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OrderDetails;
