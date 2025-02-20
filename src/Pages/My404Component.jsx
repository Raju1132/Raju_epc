import { Link } from "react-router-dom";
function My404Component() {
  return (
    <div className="flex  justify-center items-center h-[100dvh]">
      <div className="flex flex-col justify-center items-center w-full gap-12">
        <div className=" !text-9xl text-[#c31c00] mt-12">404</div>
        <div className="!text-4xl md:!text-6xl text-center">
          Oops... Page not found
        </div>
        <Link className="!text-xl button !px-6 !py-4" to={"/"}>
          HOME
        </Link>
      </div>
    </div>
  );
}

export default My404Component;
