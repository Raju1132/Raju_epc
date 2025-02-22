import { CiShoppingCart } from "react-icons/ci";
import { TbListDetails } from "react-icons/tb";
import { Link } from "react-router-dom";
function Profile() {
  return (
    <div className="!mt-24  ">
      <div className="!mx-5 flex justify-between">
        <p className="!text-3xl text-[#c31c00] font-bold ">Your Account</p>
        <button className="!bg-[#c31c00]">Logout</button>
      </div>
      <div className=" flex flex-col md:flex-row gap-5 !m-5">
        <Link
          to={"/order-details"}
          className=" bg-green-500 !text-white h-52  w-96 rounded-xl !p-5 shadow-2xl flex "
        >
          <div className=" !text-3xl">Your Orders</div>
          <div className=" !mt-10 !ml-10">
            <CiShoppingCart size={100} />
          </div>
        </Link>
        <Link
          to={"/login-details"}
          className=" bg-blue-400 !text-white flex !text-3xl w-96 h-52 rounded-xl !p-5 shadow-2xl"
        >
          <div className=" !text-3xl">Login Details </div>
          <div className=" !mt-10 !ml-10">
            <TbListDetails size={100} />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Profile;
