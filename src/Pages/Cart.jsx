import img from "../assets/empty-cart.jpg";
function Cart() {
  const cart = [
    { s_no: "#123", discription: "Engine", quantity: 3, unit_price: 500 },
    { s_no: "#124", discription: "Wheel", quantity: 5, unit_price: 150 },
    { s_no: "#125", discription: "Battery", quantity: 2, unit_price: 120 },
    { s_no: "#126", discription: "Exhaust", quantity: 4, unit_price: 200 },
    { s_no: "#127", discription: "Headlights", quantity: 6, unit_price: 50 },
    { s_no: "#128", discription: "Brakes", quantity: 8, unit_price: 75 },
    { s_no: "#129", discription: "Radiator", quantity: 1, unit_price: 350 },
    { s_no: "#130", discription: "Suspension", quantity: 7, unit_price: 180 },
    { s_no: "#131", discription: "Oil Filter", quantity: 10, unit_price: 20 },
    { s_no: "#132", discription: "Alternator", quantity: 3, unit_price: 220 },
  ];

  return (
    <div className="!mt-20 !mx-2">
      <div className="flex justify-between ">
        <p className="text-[#c31c00] font-bold">Cart</p>
        <div className=" flex gap-2 justify-end">
          <button className="">Report</button>
          <button className="">Clear All</button>
          <button className="">Export to Excel</button>
          <button className="">Import to Excel</button>
        </div>
      </div>
      <div className="!mt-2 border flex justify-between !p-2 !px-4 bg-neutral-100 ">
        <p className="text-[#c31c00] font-bold">Note: </p>
        <p className="text-[#c31c00] font-bold">Cart 0 </p>
      </div>
      <div className="!mt-2 border flex justify-between flex-col !p-2">
        <div className="flex gap-5 w-full font-bold !text-xs border bg-neutral-100 !p-2">
          <p className="w-54 ">Sr.No.</p>
          <p className="w-full ">Description </p>
          <p className="w-54 ">Quantity</p>
          <p className="w-54 ">Unit Price(RS)</p>
          <p className="w-54 ">Total (RS)</p>
        </div>

        {cart.length == 0 ? (
          <div className="flex justify-center flex-col items-center">
            <img className="w-96" src={img} alt="" />
            <p className="text-[#c31c00] !text-2xl !mt-2">
              {" "}
              Oops! Your cart is empty!{" "}
            </p>
            <p> Looks like you haven't added anything to your cart yet.</p>
          </div>
        ) : (
          <div>
            {cart.map((values, key) => {
              return (
                <>
                  <div className="flex ">
                    <p className="w-54 ">{values.s_no}</p>
                    <p className="w-full ">{values.discription}</p>

                    <p className="w-54 ">{values.quantity}</p>
                    <p className="w-54 ">{values.unit_price}</p>
                    <p className="w-54 ">
                      {values.unit_price * values.quantity}
                    </p>
                  </div>
                </>
              );
            })}
          </div>
        )}
      </div>
      <p className="text-[#c31c00] font-bold">
        Sub Totals:{" "}
        {cart.reduce((acc, val) => {
          return acc + val.unit_price * val.quantity;
        }, 0)}
      </p>
    </div>
  );
}

export default Cart;
